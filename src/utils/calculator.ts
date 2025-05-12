import { inventory } from "../config/inventory";

export function calculateBasketTotal(basket: string[]): number {
    const itemCounts: Record<string, number> = {};

    for (const item of basket) {
        if (inventory[item]) {
            itemCounts[item] = (itemCounts[item] || 0) + 1;
        } else {
            console.warn(`Unrecognized item: ${item}`);
        }
    }

    let total = 0;

    for (const [item, count] of Object.entries(itemCounts)) {
        const { price, offer } = inventory[item];
        total += offer.apply(count, price);
    }

    return total;
}
