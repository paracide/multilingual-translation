import Header from "./pages/Header.tsx";
import Home from "./pages/Home.tsx";
import {HelmetProvider} from "react-helmet-async";


function App() {

    return (
        <HelmetProvider>
            <Header/>
            <Home/>
        </HelmetProvider>
    )
}

export default App
