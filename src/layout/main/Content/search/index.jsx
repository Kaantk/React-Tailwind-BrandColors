import classNames from "classnames";
import { clearBrand } from "~/store/brands/actions";
import { selectedBrands } from "~/store/brands/hooks";
import Download from "./download";

export default function Search() {
  const selectBrands = selectedBrands();

  return (
    <div className="h-[55px] w-[2027px] border-b-[1px] border-gray-light fixed top-0 px-[15px] flex items-center z-10 bg-white">
      <div className="flex items-center">
        <input
          type="text"
          className="border-none outline-none text-[14px] pl-[30px] absolute h-[24px] placeholder-color-third "
          placeholder="Search Brands"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="h-[23px] w-[23px] text-color-primary relative top-0 left-0"
        >
          <path
            fill="currentColor"
            d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
          />
        </svg>
      </div>
      <div className="ml-auto flex items-center">
        <div
          className={classNames(
            "flex items-center gap-2 pr-[15px] border-r-[1px] border-gray-light mr-[15px] pointer-events-none opacity-25",
            {
              "opacity-95 pointer-events-auto": selectBrands.length > 0,
            }
          )}
        >
          <Download />
          <button
            onClick={() => {
              const url = `http://localhost:5173/${
                selectBrands.length >= 2 ? "c" : "b"
              }/${selectBrands.map((brand) => brand.slug).join(",")}`;

              prompt("Here's the URL to share", url);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="h-[23px] w-[23px] text-color-primary hover:text-[#000]"
            >
              <path
                fill="currentColor"
                d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"
              />
            </svg>
          </button>
          <button onClick={() => clearBrand()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="h-[23px] w-[23px] text-color-primary hover:text-[#000]"
            >
              <path
                fill="currentColor"
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          </button>
          <div className="text-color-primary text-[14px]">
            {selectBrands.length} brands collected
          </div>
        </div>
        <div className="flex items-center group">
          <Download />
        </div>
      </div>
    </div>
  );
}
