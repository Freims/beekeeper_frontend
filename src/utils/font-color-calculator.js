var fontColorContrast = require('font-color-contrast');

export default function calculateFontColor(background) {
    return fontColorContrast(background);
}