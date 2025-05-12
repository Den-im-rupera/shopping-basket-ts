import { Currency } from "../models/Currency";

export const CURRENCIES: Record<string, Currency> = {
    GBP: { symbol: "£", code: "GBP", locale: "en-GB" },
    USD: { symbol: "$", code: "USD", locale: "en-US" },
    EUR: { symbol: "€", code: "EUR", locale: "en-DE" },
};
