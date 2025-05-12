import { calculateBasketTotal } from "../../src/utils/calculator";

const basket = [
    "Apple", "Apple", "Banana", // no offer
    "Melon", "Melon", "Melon",   // BOGO: pay for 2
    "Lime", "Lime", "Lime", "Lime" // 4 limes: 3-for-2 offer x1 + 1 extra
];

describe("calculateBasketTotal", () => {
    beforeEach(() => {
        jest.spyOn(console, 'warn').mockImplementation(() => { });
    });

    it("calculates correct total with mixed offers", () => {
        const total = calculateBasketTotal(basket);
        // Apple: 35*2 = 70
        // Banana: 20*1 = 20
        // Melon: 50*2 = 100 (1 free)
        // Lime: 3-for-2 + 1 = 3 × 15 = 45
        // Total: 70 + 20 + 100 + 60 = 235
        expect(total).toBe(235);
    });

    it("handles empty basket", () => {
        expect(calculateBasketTotal([])).toBe(0);
    });

    it("ignores invalid items (optional, depending on design)", () => {
        const basket = ["Apple", "UnknownItem"];
        expect(calculateBasketTotal(basket)).toBe(35); // Just Apple counted
    });
});