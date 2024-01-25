import LangOptions from "./LangOptions.tsx";

interface TranslationResultProps {
    selected: string
}

function TranslationResult(props: TranslationResultProps) {
    return (
        <div className="grid grid-cols-1">
            <LangOptions selected={props.selected}/>
            <div className="w-auto h-14 border-solid border-gray-300 rounded-md border-2 bg-gray-300">

            </div>
        </div>
    );
}

export default TranslationResult;
