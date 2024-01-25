import en from "./en.json";
import zh from "./zh.json";

export type Resource = typeof resources

export const resources = {
    en: {translation: en},
    zh: {translation: zh}
}
