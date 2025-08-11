import { useState, useEffect, useRef } from 'react';

export const useInView = (options?: IntersectionObserverInit) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<any>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
        }, { threshold: 0.1, ...options });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return { ref, inView };
};
