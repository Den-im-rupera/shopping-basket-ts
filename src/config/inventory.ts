import { ItemConfig } from "../models/ItemConfig";
import { BuyOneGetOneFree } from "../offers/BuyOneGetOneFree";
import { ThreeForTwo } from "../offers/ThreeForTwo";
import { NoOffer } from "../offers/NoOffer";

export const inventory: Record<string, ItemConfig> = {
    Apple: { price: 35, offer: new NoOffer() },
    Banana: { price: 20, offer: new NoOffer() },
    Melon: { price: 50, offer: new BuyOneGetOneFree() },
    Lime: { price: 15, offer: new ThreeForTwo() },
};
