import {useTranslation} from "react-i18next";

function Header() {
    const {t} = useTranslation();
    return (
        <header className="w-screen bg-blue-500 text-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-lg">{t('title')}</h1>
        </header>
    );
}

export default Header;
