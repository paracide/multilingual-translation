import lang from "../config/lang.ts";
import {useTranslation} from "react-i18next";
import state from "../store/store.ts";

interface LangOptionsProps {
    onLangChange?: boolean;
    selected?: string;
}

function LangOptions(props: LangOptionsProps) {
    const {t} = useTranslation()

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        if (props.onLangChange)
            state.selectLang = event.target.value;
    }

    return (
        <div>
            <select onChange={handleChange} value={props.selected}>
                {
                    lang.map(v => {
                        return <option key={v} value={v}>{t(v)}</option>
                    })
                }
            </select>
        </div>
    );
}

export default LangOptions;
