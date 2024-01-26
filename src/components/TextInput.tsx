import LangOptions from "./LangOptions.tsx";
import {store} from "../store/store.ts";

function TextInput() {


    return (
        <div className="grid grid-cols-1">
            <LangOptions selected={store.originLang}/>
            <div className="w-full h-14 border-solid border-gray-300 rounded-md border-2">
                <textarea className="w-full h-full"/>
            </div>
        </div>
    );
}

export default TextInput;
