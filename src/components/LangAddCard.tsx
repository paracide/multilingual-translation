import LangOptions from "./LangOptions.tsx";
import {store} from "../store/store.ts";
import {useSnapshot} from "valtio";

function LangAddCard() {
    const snap = useSnapshot(store);

    function handleAdd() {
        if (!snap.targetLang.includes(snap.addLang)) {
            store.targetLang.push(snap.addLang);
        }
    }

    function langChanged(event: React.ChangeEvent<HTMLSelectElement>) {
        store.addLang = event.target.value;
    }

    return (
        <div className="grid grid-cols-1">
            <select id="addLang" value={snap.addLang} onChange={langChanged}>
                <LangOptions/>
            </select>
            <button onClick={handleAdd} className="w-auto h-14 border-solid border-gray-300 rounded-md border-2">
                Add A New Language
            </button>
        </div>
    );
}

export default LangAddCard;