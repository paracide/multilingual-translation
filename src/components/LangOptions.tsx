import lang from "../config/lang.ts";
import {useTranslation} from "react-i18next";

function LangOptions() {
    const {t} = useTranslation()

    return (
        lang.map(v => {
            return <option key={v} value={v}>{t(v)}</option>
        })
    );
}

export default LangOptions;
