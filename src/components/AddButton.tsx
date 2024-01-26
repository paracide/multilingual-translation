import LangOptions from "./LangOptions.tsx";
import {store} from "../store/store.ts";
import {useSnapshot} from "valtio";

function AddButton() {
    const snap = useSnapshot(store);

    function handleAdd() {
        store.targetLang.set(snap.selectLang, "")
    }

    return (
        <div className="grid grid-cols-1">
            <LangOptions onLangChange={true}/>
            <button onClick={handleAdd} className="w-auto h-14 border-solid border-gray-300 rounded-md border-2">
                Add A New Language
            </button>
        </div>
    );
}

export default AddButton;
