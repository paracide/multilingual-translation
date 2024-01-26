import LangOptions from "./LangOptions.tsx";
import {useSnapshot} from "valtio";
import {store} from "../store/store.ts";

function OriginLangCard() {
    const snap = useSnapshot(store);
    function langChanged(event: React.ChangeEvent<HTMLSelectElement>) {
        store.originLang = event.target.value;
    }

    return (
        <div className="grid grid-cols-1">
            <select id="originLang" value={snap.originLang} onChange={langChanged}>
                <LangOptions/>
            </select>
            <div className="w-full h-14 border-solid border-gray-300 rounded-md border-2">
                <textarea className="w-full h-full"/>
            </div>
        </div>
    );
}

export default OriginLangCard;
