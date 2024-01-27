import {useTranslation} from "react-i18next";
import {resultStore, store} from "../store/store.ts";
import {translateAll} from "../apis/googleApi.ts";

export default function Submit() {
    const {t} = useTranslation();

    async function handleSubmit() {
        await translateAll(store.originLang, [...store.targetLang], store.searchText);
    }

    function copyToClipboard() {
        const rr = [...resultStore.results.values()]
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


