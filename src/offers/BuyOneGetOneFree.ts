import { Offer } from "../models/Offer";

export class BuyOneGetOneFree implements Offer {
    apply(count: number, unitPrice: number): number {
        return (Math.floor(count / 2) + (count % 2)) * unitPrice;
    }
}
