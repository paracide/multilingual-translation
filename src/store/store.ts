import {proxy} from "valtio";


interface Store {
    originLang: string,
    targetLang: string[]
    addLang: string
}

export const store = proxy<Store>({
    originLang: 'en',
    targetLang: ['zh-CN'],
    addLang: 'en'
});

