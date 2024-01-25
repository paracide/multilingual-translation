import LangOptions from "./LangOptions.tsx";

function TextInput() {



    return (
        <div className="grid grid-cols-1">
            <LangOptions/>
            <div className="w-full h-14 border-solid border-gray-300 rounded-md border-2">
                <textarea className="w-full h-full"/>
            </div>
        </div>
    );
}

export default TextInput;
