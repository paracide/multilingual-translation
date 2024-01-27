import {resultStore, store} from "../store/store.ts";
import LangOptions from "./LangOptions.tsx";
import {useSnapshot} from "valtio";
import {translateOne} from "../apis/googleApi.ts";
import _ from 'lodash';

interface TranslationResultProps {
    selected: string,
}

function TranslationResult(props: TranslationResultProps) {
    const snap = useSnapshot(store);
    const resultSnap = useSnapshot(resultStore);
    const mResult = resultSnap.results.get(props.selected);

    const resultLangChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newTargetLang = event.target.value;
        /*change the selectedLang state*/
        store.targetLang = store.targetLang.map(v => v === props.selected ? newTargetLang : v);
        await translateOne(snap.originLang, newTargetLang, snap.searchText);
    }

    const removeCard = () => {
        _.remove(store.targetLang, v => v === props.selected);
        console.log(resultStore.results.size)
        resultStore.results.delete(props.selected);
        console.log(resultStore.results.size)
    }

    return (
        <div className="grid grid-cols-1 h-20 shadow-md rounded-md hover:shadow-lg bg-gray-300 overflow-hidden">
            <div className="grid grid-cols-8 h-8 overflow-hidden">
                <select className="col-span-7 h-8 bg-gray-300" onChange={resultLangChange} value={props.selected}>
                    <LangOptions/>
                </select>
                <button onClick={removeCard} className="col-span-1 h-8 w-auto rounded-none bg-red-400">
                    X
                </button>
            </div>

            <div className="w-full h-full">
                <div className="w-full h-full">
                    {mResult}
                </div>
            </div>

        </div>
    );
}


export default TranslationResult;
