import LangOptions from "./LangOptions.tsx";

function TextInput() {

    return (
        <>
            <LangOptions/>
            <div>
                <textarea className="w-60 h-10 border-solid border-gray-300 rounded-md border-2">
                </textarea>
            </div>
        </>
    );
}

export default TextInput;
