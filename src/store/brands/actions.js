import { _addBrand, _clearBrand, _removeBrand } from ".";
import { store } from "../store";

export const addBrand = (brand) => store.dispatch(_addBrand(brand));

export const removeBrand = (brand) => store.dispatch(_removeBrand(brand));

export const clearBrand = () => store.dispatch(_clearBrand());
