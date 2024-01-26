import OriginLangCard from "../components/OriginLangCard.tsx";
import LangAddCard from "../components/LangAddCard.tsx";
import {store} from "../store/store.ts";
import TranslationResult from "../components/TranslationResult.tsx";
import {useSnapshot} from "valtio";

function Home() {
    const snap = useSnapshot(store)
    return (
        <main className="grid grid-cols-2 grid-rows-5 gap-4 h-screen w-screen p-2">
            <OriginLangCard/>
            {
                snap.targetLang.map(k => (
                    <TranslationResult key={k} selected={k}/>
                ))
            }
            <LangAddCard/>
        </main>
    );
}

export default Home;
