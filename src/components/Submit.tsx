import {useTranslation} from "react-i18next";
import {useSnapshot} from "valtio";
import {resultStore, store} from "../store/store.ts";
import {translateAll} from "../apis/googleApi.ts";

export default function Submit() {
    const {t} = useTranslation();
    const snap = useSnapshot(store);
    const resultSnap = useSnapshot(resultStore);

    async function handleSubmit() {
        await translateAll(snap.originLang, [...snap.targetLang], snap.searchText);
    }

    function copyToClipboard() {
        const rr = [snap.searchText, ...resultSnap.results.values()]
        navigator.clipboard.writeText(rr.join("\t"));
    }

    return (
        <div className="grid grid-cols-2 gap-4 place-content-center">
            <button onClick={handleSubmit}
                    className="h-14 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r shadow-md hover:shadow-lg focus:outline-none focus:shadow-outline">
                {t("submitButton")}
            </button>
            <button onClick={copyToClipboard}
                    className="h-14 bg-green-400 hover:bg-green-700 text-white font-bold rounded-l shadow-md hover:shadow-lg focus:outline-none focus:shadow-outline">
                {t("copyResultButton")}
            </button>
        </div>
    );
}


