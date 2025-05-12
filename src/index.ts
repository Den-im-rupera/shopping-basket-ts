import { calculateBasketTotal } from "./utils/calculator";
import { formatPrice } from "./utils/formatPrice";
import { CURRENCIES } from "./config/currencies";

// const basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"];
const basket = ["Lime", "Lime", "Lime", "Lime"]
const total = calculateBasketTotal(basket);

// Choose currency dynamically
const currency = CURRENCIES.EUR;

// console.log(`Total: ${formatPrice(total)}`);

console.log(`Total: ${formatPrice(total, currency)}`);
