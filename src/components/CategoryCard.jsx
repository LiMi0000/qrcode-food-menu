import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ name, image, glow, id }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/category/${name.toLowerCase()}`);
    };

    return (
        <div
            id={id}
            onClick={handleClick}
            className={`relative w-full h-32 sm:h-40 md:h-48 lg:h-52 xl:h-60 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105
                ${glow ? 'animate-pulse ease-in-out' : ''}
            `}
        >
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black/40">
                {name}
            </div>
        </div>
    );
}
