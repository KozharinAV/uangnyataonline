export const getClientWidth = (): number => {
    if (typeof document === 'undefined') return 0;
    return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
    );
}

export const getClientHeight = (): number => {
    if (typeof document === 'undefined') return 0;
    return Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
    );
}