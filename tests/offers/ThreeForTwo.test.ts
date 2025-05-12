import { ThreeForTwo } from "../../src/offers/ThreeForTwo";

describe("ThreeForTwo Offer", () => {
    const offer = new ThreeForTwo();
    const price = 150;

    it("charges for all if less than 3", () => {
        expect(offer.apply(2, price)).toBe(300);
    });

    it("charges for 2 items out of 3", () => {
        expect(offer.apply(3, price)).toBe(300);
    });

    it("correctly applies multiple sets of three", () => {
        expect(offer.apply(6, price)).toBe(600);
    });

    it("handles extra items beyond group of 3", () => {
        expect(offer.apply(7, price)).toBe(750);
    });
});
