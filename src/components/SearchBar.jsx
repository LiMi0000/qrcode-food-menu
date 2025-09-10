import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const searchPlaceholder = {
    en: "Search for food",
    sq: "Kërko ushqimin",
    mk: "Пребарување храна",
};


export default function SearchBar({ menuData, onFilter }) {
    const { lang } = useLanguage();
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);

        const filtered = Object.keys(menuData).filter((category) =>
            menuData[category]?.translations[lang].toLowerCase().includes(value)
        );

        onFilter(filtered);
    };

    const clearSearch = () => {
        setQuery("");
        onFilter(Object.keys(menuData));
    };

    return (
        <div className=" flex justify-center items-start w-full">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg">
                <div className="flex items-center gap-2 relative">
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder={searchPlaceholder[lang]}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    {query && (
                        <button
                            onClick={clearSearch}
                            className="absolute z-50 right-2 top-0.5 text-gray-500 hover:text-red-500 text-2xl"
                            aria-label="Clear search"
                        >
                            ×
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
