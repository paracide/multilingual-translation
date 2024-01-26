import {resultStore} from "../store/store.ts";
import _ from 'lodash';


export async function goGoogle(sl: string, tl: string, q: string): Promise<string[]> {
    const baseUrl = "https://clients5.google.com/translate_a/t";
    const queryParams = new URLSearchParams({
        client: "dict-chrome-ex",
        sl,
        tl,
        q
    });
    const url = `${baseUrl}?${queryParams.toString()}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    return await response.json() as Promise<string[]>;
}

export const translateOne = async (sl: string, tl: string, q: string) => {
    if (_.isEmpty(q.trim())) {
        resultStore.results.clear();
    }
    try {
        const response = await goGoogle(sl, tl, q);
        resultStore.results.set(tl, response[0]);
    } catch (error) {
        console.error('Translation error:', error);
    }
}

export const translateAll = async (sl: string, targetLang: string[], q: string) => {

    targetLang.forEach(tl => {
        translateOne(sl, tl, q).catch(error => {
            console.error(`Translation error for language ${tl}:`, error);
        });
    });
};


