import { useEffect, useState } from "react";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-opacity
                bg-white text-white
                ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
            aria-label="Back to top"
        >
            <img src="/up-arrow.png" className="h-5 w-5" />
        </button>
    );
}
