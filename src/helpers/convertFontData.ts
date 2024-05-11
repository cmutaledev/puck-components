export function convertFontData(fontData: { family: string; displayName: string }[]): { label: string; value: string }[] {
    return fontData.map((font) => ({
        label: font.displayName,
        value: font.family,
    }));
}