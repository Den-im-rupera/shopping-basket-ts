import { Offer } from "../models/Offer";

export class ThreeForTwo implements Offer {
    apply(count: number, unitPrice: number): number {
        return (Math.floor(count / 3) * 2 + (count % 3)) * unitPrice;
    }
}
