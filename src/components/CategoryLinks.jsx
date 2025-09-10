import { useLanguage } from "../context/LanguageContext";

export default function CategoryJumpLinks({ categories, menuData, onJump }) {
    const { lang } = useLanguage();

    const handleClick = (category) => {
        const el = document.getElementById(category);
        if (el) {
            const yOffset = -250; // Adjust this value (in px) to control spacing
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });

            if (onJump) onJump(category);
        }
    };


    return (
        <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
            <div className="inline-flex gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleClick(category)}
                        className="bg-green-100 hover:bg-green-200 text-green-800 font-medium px-3 py-1 rounded-full text-sm inline-block"
                    >
                        {menuData[category]?.translations[lang]}
                    </button>
                ))}
            </div>
        </div>
    );
}
