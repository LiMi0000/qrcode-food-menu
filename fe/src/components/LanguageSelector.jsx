import { useState, useEffect, useRef } from "react";
import Flag from "react-world-flags";

export default function LanguageSelector({ languages, lang, setLang }) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    const otherLanguages = Object.entries(languages).filter(([code]) => code !== lang);

    const handleChange = (code) => {
        setLang(code);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative z-50 flex justify-end mt-4">
            <div className="relative w-10 h-auto">
                <div className="absolute -top-8 right-1 flex flex-col items-center">
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-10 h-10 rounded-full overflow-hidden shadow-md bg-white z-20"
                    >
                        <Flag code={languages[lang].country} className="w-full h-full object-cover" />
                    </button>

                    <div className="flex flex-col items-center mt-2 space-y-2">
                        {otherLanguages.map(([code, { country }], index) => (
                            <button
                                key={code}
                                onClick={() => handleChange(code)}
                                className={`
                                    w-10 h-10 rounded-full overflow-hidden shadow-sm bg-white
                                    transform transition-all duration-300 ease-out
                                    ${open
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                    }
                                `}
                                style={{ transitionDelay: `${(index + 1) * 75}ms` }}
                            >
                                <Flag code={country} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
