

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
