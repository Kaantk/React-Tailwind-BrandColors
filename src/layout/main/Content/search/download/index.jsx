import { selectedBrands } from "~/store/brands/hooks";
import { Popover } from "@headlessui/react";
import { toast } from "react-toastify";

function Download() {
  const selectBrands = selectedBrands();

  const brandsDownload = (downloadTypes) => {
    if (selectBrands.length > 0) {
      let output = ""; // output değişkenini burada tanımlamalısınız, içerde tekrar tanımlamayın.
      switch (downloadTypes) {
        case "css": {
          output = ":root {\n";
          selectBrands.forEach((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.forEach((color, key) => {
              output += `--${slug}-${key}: #${color};\n`;
            });
          });
          output += "}";
          break;
        }
        case "scss": {
          console.log(downloadTypes);
          break;
        }
        case "less": {
          console.log(downloadTypes);
          break;
        }
        default:
          break;
      }

      const blob = new Blob([output], { type: "text/css" });
      const url = URL.createObjectURL(blob);

      // Dosyayı indirme işlemi
      const a = document.createElement("a");
      a.href = url;
      a.download = `brandcolors.${downloadTypes}`; // İndirilen dosyanın adı ve uzantısı
      document.body.appendChild(a);
      a.click();

      // Kullanılmayan URL'yi temizle
      URL.revokeObjectURL(url);
    } else {
      toast.error("You must choose at least one brand", {
        position: "bottom-right",
        theme: "dark",
        autoClose: 2000,
      });
    }
  };

  return (
    <Popover className="relative">
      <Popover.Button className="outline-none flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="h-[23px] w-[23px] text-color-primary group-hover:text-[#000]"
        >
          <path
            fill="currentColor"
            d="M160-120v-80h640v80H160Zm320-160L280-480l56-56 104 104v-408h80v408l104-104 56 56-200 200Z"
          />
        </svg>
        <div className="text-color-primary group-hover:text-[#000] text-[14px]">
          All Brands
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute z-10 bg-white flex flex-col border-[1px] rounded-lg text-[14px] overflow-hidden items-start w-[80px] opacity-100">
        <a href="/analytics" className="hover:bg-blue-normal hover:text-white">
          ASE (Adobe)
        </a>
        <a
          onClick={() => brandsDownload("css")} // onClick kullanarak indirme işlemini tetikleyin
          href="/analytics"
          className="hover:bg-blue-normal hover:text-white w-full flex items-start"
        >
          CSS
        </a>
        <a
          onClick={() => brandsDownload("scss")} // onClick kullanarak indirme işlemini tetikleyin
          href="/analytics"
          className="hover:bg-blue-normal hover:text-white w-full flex items-start"
        >
          SCSS
        </a>
        <a
          onClick={() => brandsDownload("less")} // onClick kullanarak indirme işlemini tetikleyin
          href="/analytics"
          className="hover:bg-blue-normal hover:text-white w-full flex items-start"
        >
          LESS
        </a>
        <a
          href="/analytics"
          className="hover:bg-blue-normal hover:text-white w-full flex items-start"
        >
          Stylus
        </a>
      </Popover.Panel>
    </Popover>
  );
}

export default Download;
