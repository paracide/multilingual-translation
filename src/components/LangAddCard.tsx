import LangOptions from "./LangOptions.tsx";
import {store} from "../store/store.ts";
import {useSnapshot} from "valtio";
import {translateOne} from "../apis/googleApi.ts";

function LangAddCard() {
    const snap = useSnapshot(store);

    async function handleAdd() {
        const addLang = store.addLang;
        if (!store.targetLang.includes(addLang)) {
            store.targetLang.push(addLang);
            /*translate when the first time*/
            await translateOne(store.originLang, addLang, store.searchText);
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
