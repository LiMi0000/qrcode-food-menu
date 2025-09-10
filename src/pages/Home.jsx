import { menuData } from '../data/menuData';
import CategoryCard from '../components/CategoryCard';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BackToTopButton from '../components/BacktoTopButton';
import CategoryJumpLinks from '../components/CategoryLinks';

const title = {
    en: "Explore Our Menu",
    sq: "Eksploroni menynë tonë",
    mk: "Истражете го нашето мени",
};

export default function Home() {
    const { lang } = useLanguage();
    // const categories = Object.keys(menuData);
    const [glowCategory, setGlowCategory] = useState(null);
    const [filteredCategories, setFilteredCategories] = useState(null);

    const categories = filteredCategories || Object.keys(menuData);

    return (
        <div className="grid gap-4 mt-4 px-4 sm:px-6 lg:px-8">
            <CategoryJumpLinks
                categories={categories}
                menuData={menuData}
                onJump={(cat) => {
                    setGlowCategory(null);
                    setTimeout(() => setGlowCategory(cat), 10);
                    setTimeout(() => setGlowCategory(null), 3000);
                }}
            />

            <SearchBar
                menuData={menuData}
                onClose={() => {
                    setFilteredCategories(null);
                }}
                onFilter={(filtered) => setFilteredCategories(filtered)}
            />


            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                {title[lang]}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <div key={category} id={category}>
                        <CategoryCard
                            id={category}
                            key={category}
                            name={menuData[category]?.translations[lang] || category}
                            image={menuData[category]?.image}
                            glow={glowCategory === category}
                        />
                    </div>
                ))}
            </div>

            <BackToTopButton />
        </div>
    );
}
