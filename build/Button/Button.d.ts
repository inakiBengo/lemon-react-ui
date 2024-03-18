import React from "react";
interface Props {
    children?: any | string;
    variant?: string;
    size?: string;
    radius?: string;
    fw?: string;
    color?: string;
    disabled?: boolean;
    isLoading?: boolean;
    href?: string;
    blank?: boolean;
}
declare const Button: React.FC<Props>;
export { Button };
