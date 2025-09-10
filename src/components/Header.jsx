import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const languages = {
    en: { country: "GB", label: "English" },
    sq: { country: "AL", label: "Shqip" },
    mk: { country: "MK", label: "Македонски" },
};

const workingHoursText = {
    en: "Open Daily",
    sq: "Hapur çdo ditë",
    mk: "Отворено секој ден",
};


export default function Header() {
    const { lang, setLang } = useLanguage();

    return (
        <header
            className={`
    relative shadow p text-center space-y 
    bg-[url('/pattern.png')] bg-repeat
    sm:bg-[url('/pattern.png')] sm:bg-repeat
    lg:bg-none
  `}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            {/* Optional overlay for contrast */}
            {/* <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-0"></div> */}

            <div className="relative z-10 p-4 space-y-4">
                <p className="text-sm text-gray-600">
                    <span className="font-semibold text-md">{workingHoursText[lang]}: </span>
                    <span className="font-medium text-green-700">08:00 – 24:00</span>
                </p>

                <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-800">
                    New Vintage Lounge and Bar

                </h1>

                <p className="text-md sm:text-base md:text-lg text-gray-600 max-w-md mx-auto">
                    Welcome to our restaurant! <br />
                    Enjoy our delicious dishes crafted with care.
                </p>

                <p className="text-md text-gray-700">
                    <a href="tel:+38971893337" className="text-green-700 font-semibold">
                        +389 71893337
                    </a>
                </p>

                <LanguageSelector languages={languages} lang={lang} setLang={setLang} />

            </div>

        </header>
    );
}
