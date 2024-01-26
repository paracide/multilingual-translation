import {resultStore, store} from "../store/store.ts";
import LangOptions from "./LangOptions.tsx";
import {goGoogle} from "../apis/api.ts";
import {useSnapshot} from "valtio";

interface TranslationResultProps {
    selected: string,
}

function TranslationResult(props: TranslationResultProps) {
    const snap = useSnapshot(store);
    const resultSnap = useSnapshot(resultStore);
    const mResult = resultSnap.results.get(props.selected);

    const resultLangChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newTargetLang = event.target.value;
        store.targetLang = store.targetLang.map(v => v === props.selected ? newTargetLang : v);
        await translateOne(snap.originLang, newTargetLang, snap.searchText);
    }

    const translateOne = async (sl: string, tl: string, q: string) => {
        try {
            const response = await goGoogle(sl, tl, q);
            resultStore.results.set(tl, response[0]);
        } catch (error) {
            console.error('Translation error:', error);
        }
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
