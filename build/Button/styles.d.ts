declare function setSize(size: string, styles: {
    [key: string]: string;
}): string;
declare function setRadius(radius: string, styles: {
    [key: string]: string;
}): string;
declare function setFw(fw: string, styles: {
    [key: string]: string;
}): string;
declare function setVariant(variant: string, styles: {
    [key: string]: string;
}): string | undefined;
export { setSize, setRadius, setFw, setVariant };
