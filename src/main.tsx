import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './locales/i18n'
/*import {store} from "./store/store.ts";
import {subscribe} from "valtio";

// 从 localStorage 加载状态
const myStateKey = "myState";
const storedState = localStorage.getItem(myStateKey);
if (storedState) {
    Object.assign(store, JSON.parse(storedState));
}
subscribe(store, () => localStorage.setItem(myStateKey, JSON.stringify(store)))*/

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
