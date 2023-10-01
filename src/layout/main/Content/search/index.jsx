import classNames from "classnames";
import { BiSearchAlt2, BiDownload, BiLinkAlt, BiX } from "react-icons/Bi";
import { selectedBrands } from "~/store/brands/hooks";

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
        <BiSearchAlt2 className="h-[23px] w-[23px] text-color-primary relative top-0 left-0" />
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
          <button>
            <BiDownload className="h-[23px] w-[23px] text-color-primary hover:text-[#000]" />
          </button>
          <button>
            <BiLinkAlt className="h-[23px] w-[23px] text-color-primary hover:text-[#000]" />
          </button>
          <button>
            <BiX className="h-[23px] w-[23px] text-color-primary hover:text-[#000]" />
          </button>
          <div className="text-color-primary text-[14px]">
            {selectBrands.length} brands collected
          </div>
        </div>
        <div className="flex items-center group gap-2">
          <button>
            <BiDownload className="h-[23px] w-[23px] text-color-primary group-hover:text-[#000]" />
          </button>
          <div className="text-color-primary group-hover:text-[#000] text-[14px]">
            All Brands
          </div>
        </div>
      </div>
    </div>
  );
}
