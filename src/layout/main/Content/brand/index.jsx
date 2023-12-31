import { addBrand, removeBrand } from "~/store/brands/actions";
import ColorButton from "./color-button";
import { selectedBrands } from "~/store/brands/hooks";
import { useEffect, useState } from "react";
import classNames from "classnames";
import DateFormatter from "~/helpers/dateFormatter";

export default function Brand({ brand }) {
  const selectBrandsArray = selectedBrands();
  const [selectBrand, setSelectBrand] = useState(false);

  useEffect(() => {
    if (selectBrandsArray.length === 0) {
      setSelectBrand(false);
    }
  }, [selectBrandsArray]);

  const toggleBrandSelection = (brand) => {
    const isBrandAlreadySelected = selectBrandsArray.some(
      (b) => b.slug === brand.slug
    );

    if (isBrandAlreadySelected) {
      // Eğer marka zaten seçiliyse, kaldır
      removeBrand(brand);
    } else {
      // Eğer marka seçili değilse, ekle
      addBrand(brand);
    }
  };

  return (
    <article
      onClick={() => {
        toggleBrandSelection(brand);
        setSelectBrand(!selectBrand);
      }}
      className="ml-[15px] border-b-[1px] border-gray-light text-color-secondary text-xl py-[15px] pr-[15px] flex cursor-pointer relative"
    >
      {selectBrand && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="w-6 h-6 bg-wihte absolute top-6 -left-[26px] bg-white text-blue-normal py-0.5"
        >
          <path
            fill="currentColor"
            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
          />
        </svg>
      )}
      <div className="flex flex-col w-[400px] mr-5 my-2">
        <p
          className={classNames({
            "font-bold": selectBrand,
          })}
        >
          {brand.title}
        </p>
        {selectBrand && (
          <footer className="w-full flex items-center text-color-primary text-[14px] mt-[15px]">
            <p>Updated {DateFormatter(brand.modified)}</p>
            {brand?.brand_url && (
              <div className="flex items-center">
                <span className="bg-color-primary w-1 h-1 rounded-full mx-[10px]" />
                <a
                  href={brand.brand_url}
                  target="_blank"
                  className="hover:underline"
                >
                  Brand URL
                </a>
              </div>
            )}
            {brand?.source_url && (
              <div className="flex items-center">
                <span className="bg-color-primary w-1 h-1 rounded-full mx-[10px]" />
                <a
                  href={brand.source_url}
                  target="_blank"
                  className="hover:underline ::before"
                >
                  Source URL
                </a>
              </div>
            )}
            {brand?.source_url && (
              <div className="flex items-center">
                <span className="bg-color-primary w-1 h-1 rounded-full mx-[10px]" />
                <a
                  href={brand.source_url}
                  target="_blank"
                  className="hover:underline"
                >
                  Permalink
                </a>
              </div>
            )}
          </footer>
        )}
      </div>
      <div className="flex-1 flex items-center gap-2 h-11">
        {brand.colors.map((color, index) => (
          <ColorButton key={index} color={color} selectBrand={selectBrand} />
        ))}
      </div>
    </article>
  );
}
