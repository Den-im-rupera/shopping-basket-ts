import { BuyOneGetOneFree } from "../../src/offers/BuyOneGetOneFree";

describe("BuyOneGetOneFree Offer", () => {
    const offer = new BuyOneGetOneFree();
    const price = 100;

    it("charges full price for 1 item", () => {
        expect(offer.apply(1, price)).toBe(100);
    });

    it("charges for half the items when even count", () => {
        expect(offer.apply(4, price)).toBe(200);
    });

    it("charges for (n / 2) + 1 items when odd count", () => {
        expect(offer.apply(5, price)).toBe(300);
    });
});