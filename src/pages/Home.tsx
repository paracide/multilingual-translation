import TextInput from "../components/TextInput.tsx";
import AddButton from "../components/AddButton.tsx";
import {store} from "../store/store.ts";
import TranslationResult from "../components/TranslationResult.tsx";
import {useSnapshot} from "valtio";

function Home() {
    const snap = useSnapshot(store)
    return (
        <main className="grid grid-cols-2 grid-rows-5 gap-4 h-screen w-screen p-2">
            <TextInput/>
            {
                Array.from(snap.targetLang).map(([k, v]) => (
                    <TranslationResult key={k} selected={k} result={v}/>
                ))
            }
            <AddButton/>
        </main>
    );
}

export default Home;
