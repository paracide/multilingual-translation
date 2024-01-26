import {resultStore, store} from "../store/store.ts";
import LangOptions from "./LangOptions.tsx";
import {useSnapshot} from "valtio";
import {translateOne} from "../apis/googleApi.ts";

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

    return (
        <div className="grid grid-cols-1">
            <select onChange={resultLangChange} value={props.selected}>
                <LangOptions/>
            </select>
            <div className="w-auto h-14 border-solid border-gray-300 rounded-md border-2 bg-gray-300">
                {mResult}
            </div>
        </div>
    );
}


export default TranslationResult;
