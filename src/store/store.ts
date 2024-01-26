import {proxy} from "valtio";
import {proxyMap} from "valtio/utils";


interface Store {
    originLang: string,
    targetLang: Map<string, string>
    selectLang: string
}

export const store = proxy<Store>({
    originLang: 'en',
    targetLang: proxyMap([['zh-CN', '']]),
    selectLang: 'en'
});

