import { Currency } from "../models/Currency";

export function formatPrice(pence: number, currency: Currency): string {
    return new Intl.NumberFormat(currency.locale, {
        style: "currency",
        currency: currency.code,
        minimumFractionDigits: 2,
    }).format(pence / 100);
}
