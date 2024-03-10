const setColor = (color) => {
    if (color.slice(0, 1) === '#')
        color = hexToRgb(color);
    const [r, g, b] = color.substring(0, color.length - 1).slice(4).split(',');
    const lightColor = `rgb(${adjustBrightness(r, 1.2)}, ${adjustBrightness(g, 1.2)}, ${adjustBrightness(b, 1.2)})`;
    const darkestColor = `rgb(${adjustBrightness(r, 0.8)}, ${adjustBrightness(g, 0.8)}, ${adjustBrightness(b, 0.8)})`;
    const isLightColor = ColorIsLight(r, g, b);
    const originalColor = color;
    return { originalColor, lightColor, darkestColor, isLightColor };
};
function ColorIsLight(r, g, b) {
    const brightness = (0.299 * Number(r) + 0.587 * Number(g) + 0.114 * Number(b)) / 255;
    return brightness > 0.5;
}
function adjustBrightness(component, factor) {
    const newComponent = Math.round(Math.min(Math.max(0, Number(component) * factor), 255));
    return newComponent;
}
function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
export default setColor;
