import {proxy} from "valtio";

const state = proxy({
    originLang: 'auto',
    targetLang: ['en']
});

export default state;
