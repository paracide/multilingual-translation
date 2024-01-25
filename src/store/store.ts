import {proxy} from "valtio";

const state = proxy({
    originLang: 'auto',
    targetLang: new Set<string>(["en"]),
    selectLang: 'en'
});

export default state;
