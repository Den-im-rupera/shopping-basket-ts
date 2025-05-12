import { formatPrice } from "../../src/utils/formatPrice";
import { CURRENCIES } from "../../src/config/currencies";

describe("formatPrice", () => {
    it("formats GBP correctly", () => {
        expect(formatPrice(99, CURRENCIES.GBP)).toBe("\u00a30.99");
    });

    it("formats USD correctly", () => {
        expect(formatPrice(150, CURRENCIES.USD)).toBe("$1.50");
    });

    it("formats EUR correctly", () => {
        expect(formatPrice(500, CURRENCIES.EUR)).toBe("\u20ac5.00");
    });
});
