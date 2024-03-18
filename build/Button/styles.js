function setSize(size, styles) {
    const string = size.toLowerCase();
    if (string === 'xs')
        return styles.xs_size;
    if (string === 'sm')
        return styles.sm_size;
    if (string === 'md')
        return styles.md_size;
    if (string === 'lg')
        return styles.lg_size;
    if (string === 'xl')
        return styles.xl_size;
    return styles.sm_size;
}
function setRadius(radius, styles) {
    const string = radius.toLowerCase();
    if (string === 'xs')
        return styles.xs_radius;
    if (string === 'sm')
        return styles.sm_radius;
    if (string === 'md')
        return styles.md_radius;
    if (string === 'lg')
        return styles.lg_radius;
    if (string === 'xl')
        return styles.xl_radius;
    return styles.sm_radius;
}
function setFw(fw, styles) {
    const string = fw.toLowerCase();
    if (string === '100')
        return styles.m_fw;
    if (string === '300')
        return styles.xs_fw;
    if (string === '500')
        return styles.md_fw;
    if (string === '700')
        return styles.lg_fw;
    if (string === '900')
        return styles.xl_fw;
    return styles.sm_fw;
}
function setVariant(variant, styles) {
    const string = variant === null || variant === void 0 ? void 0 : variant.toLowerCase();
    if (string === 'default')
        return styles.default;
    if (string === 'light')
        return styles.light;
    if (string === 'line')
        return styles.line;
    if (string === 'subtle')
        return styles.subtle;
    if (string === 'dash')
        return styles.dash;
    if (string === 'warning')
        return styles.warning;
    if (string === 'danger')
        return styles.danger;
    if (string === 'success')
        return styles.success;
    if (string === 'neomorphism')
        return styles.neomorphism;
}
export { setSize, setRadius, setFw, setVariant };
