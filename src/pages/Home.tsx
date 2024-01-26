import OriginLangCard from "../components/OriginLangCard.tsx";
import LangAddCard from "../components/LangAddCard.tsx";
import {store} from "../store/store.ts";
import TranslationResult from "../components/TranslationResult.tsx";
import {useSnapshot} from "valtio";
import Submit from "../components/Submit.tsx";

export default function Home() {
    const snap = useSnapshot(store)

    return (
        <main className="grid grid-cols-2 p-4 gap-2 w-screen">
            <OriginLangCard/>
            <Submit/>
            {
                snap.targetLang.map(k => (
                    <TranslationResult key={k} selected={k}/>
                ))
            }
            <LangAddCard/>
        </main>
    );
}


