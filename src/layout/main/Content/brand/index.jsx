import { addBrand } from "~/store/brands/actions";
import ColorButton from "./color-button";

export default function Brand({ brand }) {
  return (
    <article
      onClick={() => addBrand(brand)}
      className="ml-[15px] border-b-[1px] border-gray-light text-color-secondary text-xl py-[15px] pr-[15px] flex items-center cursor-pointer"
    >
      <p className="my-2 inline-flex w-[400px] mr-5">{brand.title}</p>
      <div className="flex-1 flex items-center gap-2">
        {brand.colors.map((color, index) => (
          <ColorButton key={index} color={color} />
        ))}
      </div>
    </article>
  );
}
