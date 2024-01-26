import Header from "./pages/Header.tsx";
import Home from "./pages/Home.tsx";
import {HelmetProvider} from "react-helmet-async";
import Landing from "./pages/Landing.tsx";


function App() {

    return (
        <HelmetProvider>
            <Header/>
            <Landing/>
            <Home/>
        </HelmetProvider>
    )
}

export default App
