function fixText(textToFix) {
    console.log('input',textToFix);
    let textLet = textToFix.split('');
    console.log('pre',textLet);
    for (let i = 0; i < textLet.length; i++) {
        
        if (textLet[i] == ' ') {
            textLet.splice(i, 1);
            return fixText(textLet.join(''));
        }
        if (i == 0) textLet[i] = textLet[i].toUpperCase();
        else textLet[i] = textLet[i].toLowerCase();
    }
    textLet = textLet.join('');
    console.log('corrected',textLet);
    return textLet;
}