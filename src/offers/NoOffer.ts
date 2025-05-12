import { Offer } from "../models/Offer";

export class NoOffer implements Offer {
    apply(count: number, unitPrice: number): number {
        return count * unitPrice;
    }
}
