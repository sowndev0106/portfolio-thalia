import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options: any) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
            if (entry.isIntersecting) {
                observer.unobserve(ref.current as any);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isIntersecting];
};

export default useIntersectionObserver;
