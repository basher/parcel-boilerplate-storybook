export const browserSupportsAllFeatures = (): boolean => {
    const isIntersectionObserver = 'IntersectionObserver' in window;
    const isFetch = 'fetch' in window;
    return isIntersectionObserver && isFetch;
};
