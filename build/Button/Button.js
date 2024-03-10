import React, { useEffect, useState } from "react";
import styles from './Button.module.css';
import { setSize, setRadius, setFw, setVariant } from './styles';
import setColor from "../color";
const Button = ({ children, variant = 'default', size = 'sm', radius = 'sm', fw = '700', color, disabled, isLoading }) => {
    const [isHover, setIsHover] = useState(false);
    const [lightColor, setLightColor] = useState();
    const [darknesColor, setDarknesColor] = useState();
    const [originialColor, setOriginalColor] = useState();
    const [isLightColor, setIsLightColor] = useState(true);
    const elements = `
  ${setVariant(variant, styles)} 
  ${setSize(size, styles)} 
  ${setRadius(radius, styles)} 
  ${setFw(fw, styles)} 
  ${styles.styles}
  `;
    function setStyles() {
        const string = variant === null || variant === void 0 ? void 0 : variant.toLowerCase();
        if (!originialColor)
            return;
        if (string === 'default') {
            return {
                background: isHover && !isLoading && !disabled ? darknesColor : originialColor,
                border: 'none',
                color: isLightColor ? 'rgb(14, 14, 1)' : 'rgb(236, 236, 236)'
            };
        }
        if (string === 'light') {
            const lightColorOpacity = (lightColor === null || lightColor === void 0 ? void 0 : lightColor.substring(0, lightColor.length - 1)) + ', 0.5)';
            const colorOpacity = (darknesColor === null || darknesColor === void 0 ? void 0 : darknesColor.substring(0, darknesColor.length - 1)) + ', 0.3)';
            return {
                background: isHover && !isLoading && !disabled ? lightColorOpacity : colorOpacity,
                border: 'none',
                color: originialColor
            };
        }
        if (string === 'line') {
            const lightColorOpacity = (originialColor === null || originialColor === void 0 ? void 0 : originialColor.substring(0, originialColor.length - 1)) + ', 0.4)';
            return {
                background: isHover && !isLoading && !disabled ? lightColorOpacity : 'transparent',
                border: `solid 2px ${originialColor}`,
                color: originialColor
            };
        }
        if (string === 'subtle') {
            const lightColorOpacity = (originialColor === null || originialColor === void 0 ? void 0 : originialColor.substring(0, originialColor.length - 1)) + ', 0.2)';
            return {
                background: isHover && !isLoading && !disabled ? lightColorOpacity : 'transparent',
                border: `none`,
                color: originialColor
            };
        }
        if (string === 'dash') {
            return {
                background: isHover && !isLoading && !disabled ? darknesColor : originialColor,
                border: 'none',
                color: isLightColor ? 'rgb(14, 14, 1)' : 'rgb(236, 236, 236)'
            };
        }
    }
    useEffect(() => {
        if (color) {
            const { originalColor, lightColor, darkestColor, isLightColor } = setColor(color);
            setLightColor(lightColor);
            setDarknesColor(darkestColor);
            setIsLightColor(isLightColor);
            setOriginalColor(originalColor);
        }
    }, [color]);
    return (React.createElement("div", { className: styles.buttonContainer, onMouseEnter: () => setIsHover(true), onMouseLeave: () => setIsHover(false) },
        React.createElement("button", { className: elements, style: setStyles(), disabled: disabled || isLoading },
            React.createElement(React.Fragment, null,
                isLoading
                    ? React.createElement("svg", { className: styles.loaderIcon, width: "200px", height: "200px", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                        React.createElement("circle", { cx: "50", cy: "50", fill: "none", stroke: "#85a2b6", strokeWidth: "12", r: "35", strokeDasharray: "164.93361431346415 56.97787143782138", transform: "matrix(1,0,0,1,0,0)" }))
                    : '',
                children))));
};
export { Button };
