import { _addBrand, _removeBrand } from ".";
import { store } from "../store";

export const addBrand = (brand) => store.dispatch(_addBrand(brand));

export const removeBrand = (brand) => store.dispatch(_removeBrand(brand));
