import state from "../store/store.ts";
import {useSnapshot} from "valtio";
import TextInput from "../components/TextInput.tsx";
import TranslationResult from "../components/TranslationResult.tsx";

function Home() {
    const snap = useSnapshot(state);
    snap.originLang
    return (
        <main className="h-screen w-screen p-2">

            <TextInput/>

            <TranslationResult/>

        </main>
    );
}

export default Home;
