declare const setColor: (color: string) => {
    originalColor: string;
    lightColor: string;
    darkestColor: string;
    isLightColor: boolean;
};
export default setColor;
