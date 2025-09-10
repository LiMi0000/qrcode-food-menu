import { useState } from "react";

const fallbackRates = {
    EUR: 0.0162,
    USD: 0.0195,
};

export default function CurrencySwitcher({ priceMKD }) {
    const [currency, setCurrency] = useState("MKD");
    const [rates, setRates] = useState(fallbackRates);

    const cleanedPrice = parseFloat(
        String(priceMKD).replace(/[^0-9.]/g, "")
    );

    const converted =
        !isNaN(cleanedPrice) && currency !== "MKD"
            ? (cleanedPrice * rates[currency]).toFixed(2)
            : cleanedPrice;

    return (
        <div className="flex items-center justify-end">
            <p className="text-base font-semibold">
                {isNaN(cleanedPrice)
                    ? "Invalid price"
                    : currency === "MKD"
                        ? `${cleanedPrice}`
                        : `${converted}`}
            </p>

            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="text-sm px-1 py-0.5 border-none rounded focus:outline-none focus:border-none focus:border-none"
            >
                <option value="MKD">MKD</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
        </div>
    );
}
