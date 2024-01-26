import {store} from "../store/store.ts";
import LangOptions from "./LangOptions.tsx";

interface TranslationResultProps {
    selected?: string,
    result?: string
}

function TranslationResult(props: TranslationResultProps) {
    function resultLangChange(event: React.ChangeEvent<HTMLSelectElement>) {
        store.targetLang.map(v => v === props.selected ? event.target.value : v);
    }

    return (
        <div className="grid grid-cols-1">
            <select onChange={resultLangChange} value={props.selected}>
                <LangOptions/>
            </select>
            <div className="w-auto h-14 border-solid border-gray-300 rounded-md border-2 bg-gray-300">
                {props.result}
            </div>
        </div>
    );
}

export default TranslationResult;
