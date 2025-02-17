import { useCallback, useState } from "react";

export const useCenteredTree = () => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const containerRef = useCallback((containerElem) => {
        if (containerElem !== null) {
            const { width } = containerElem.getBoundingClientRect();
            setTranslate({ x: width / 2, y: 140 });
        }
    }, []);
    return [translate, containerRef];
};