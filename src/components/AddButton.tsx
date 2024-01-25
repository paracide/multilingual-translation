import LangOptions from "./LangOptions.tsx";
import state from "../store/store.ts";
import {useSnapshot} from "valtio";

function AddButton() {
    const snap = useSnapshot(state);

    function handleAdd() {
        state.targetLang = new Set(state.targetLang).add(snap.selectLang);
        console.log(state.targetLang);
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
