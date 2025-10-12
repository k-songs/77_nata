export const getFontFamily = (baseFont = 'Inter', weight = 'Regular', isItalic = false) => {
    const weightMap = {
        "100": "Thin",
        "200": "ExtraLight",
        "300": "Light",
        "400": "Regular",
        "500": "Medium",
        "600": "SemiBold",
        "700": "Bold",
        "800": "ExtraBold",
        "900": "Black",
    };

    let resolvedWeightFromMap = weightMap[weight];
    let finalWeightToUse = '';

    if (resolvedWeightFromMap !== undefined) {
        finalWeightToUse = resolvedWeightFromMap;
    } else {
        const validDescriptiveWeights = Object.values(weightMap);
        if (validDescriptiveWeights.includes(weight)) {
            finalWeightToUse = weight;
        } else {
            finalWeightToUse = 'Regular';
        }
    }
       
    let finalFontName = finalWeightToUse;

    if (isItalic && !finalFontName.toLowerCase().includes('italic')) {
        finalFontName += 'Italic';
    }

    return `${baseFont}-${finalFontName}`;
};

// 사용 예시:
// console.log(getFontFamily('Inter', 'Black'));        // 'Inter-Black'
// console.log(getFontFamily('Inter', 'Bold', true));   // 'Inter-BoldItalic'
// console.log(getFontFamily('Inter', '100'));         // 'Inter-Thin'
// console.log(getFontFamily('Inter', '400'));         // 'Inter-Regular'