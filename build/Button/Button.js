import React from "react";
import styles from './Button.module.css';
const Button = ({ children }) => {
    return (React.createElement("button", { className: styles.button }, children));
};
export { Button };
