import {useTranslation} from "react-i18next";

function Submit() {
    const {t} = useTranslation();

    return (
        <div className="grid grid-cols-2 gap-4 place-content-center">
            <button onClick={translateAll}
                className="h-14 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r shadow-md hover:shadow-lg focus:outline-none focus:shadow-outline">
                {t("submitButton")}
            </button>
            <button
                className="h-14 bg-green-400 hover:bg-green-700 text-white font-bold rounded-l shadow-md hover:shadow-lg focus:outline-none focus:shadow-outline">
                {t("copyResultButton")}
            </button>
        </div>
    );
}

function translateAll(){

}

export default Submit;
