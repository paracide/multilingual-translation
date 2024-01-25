import state from "../store/store.ts";
import {useSnapshot} from "valtio";
import TextInput from "../components/TextInput.tsx";
import TranslationResult from "../components/TranslationResult.tsx";
import AddButton from "../components/AddButton.tsx";

function Home() {
    const snap = useSnapshot(state);
    return (
        <main className="grid grid-cols-2 grid-rows-5 gap-4 h-screen w-screen p-2">
            <TextInput/>
            {[...snap.targetLang].map(v => {
                    return <TranslationResult key={v} selected={v}/>
                }
            )}
            <AddButton/>
        </main>
    );
}

export default Home;
