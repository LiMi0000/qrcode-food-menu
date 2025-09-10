import { useNavigate, useParams } from 'react-router-dom';
import { menuData } from '../data/menuData';
import useSwipeBack from '../hooks/useSwipeBack';
import { useLanguage } from '../context/LanguageContext';
import CurrencySwitcher from '../components/CurrencySwitcher';

export default function Category() {
    useSwipeBack();
    const navigate = useNavigate();
    const { categoryName } = useParams();
    const { lang } = useLanguage(); // Get the current language from context

    // console.log('URL param categoryName:', categoryName);

    const matchedKey = Object.keys(menuData).find(key => {
        const translations = menuData[key]?.translations || {};
        return (
            key.toLowerCase() === categoryName.toLowerCase() ||
            translations.en?.toLowerCase() === categoryName.toLowerCase() ||
            translations.sq?.toLowerCase() === categoryName.toLowerCase() ||
            translations.mk?.toLowerCase() === categoryName.toLowerCase()
        );
    });



    const category = menuData[matchedKey];
    const items = category?.items || [];
    const translatedTitle = category?.translations?.[lang] || matchedKey;

    // console.log('asfd', menuData[matchedKey])


    if (!items) {
        return <div className="p-4 text-center text-red-500">Category not found.</div>;
    }

    // 🔁 Reuse category card image from first item
    // const categoryImage = items[0]?.image || 'https://via.placeholder.com/400x300?text=Image';


    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6">
            <button
                className="bg-gray-300 w-10 h-10 rounded-md flex items-center justify-center"
                onClick={() => navigate('/')}
            >
                <img src="/left-arrow.png" alt="Back" className="w-5 h-5" />
            </button>


            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
                {translatedTitle}
            </h2>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>

                        <img
                            // src={categoryImage}
                            src={item.image}
                            alt={item.title}
                            className="w-full h-60 object-cover rounded-md mb-3"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/400x300?text=No+Image";
                            }}
                        />


                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>

                        <div className="text-right text-lg font-bold text-green-700 mt-auto">
                            {/* {item.price} */}
                            <CurrencySwitcher priceMKD={item.price} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
