import { useSelector } from "react-redux";

export const selectedBrands = () =>
  useSelector((store) => store.brands.selectedBrands);
