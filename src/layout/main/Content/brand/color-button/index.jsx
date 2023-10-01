import * as React from "react";
import { useHover } from "@uidotdev/usehooks";
import { MdOutlineContentCopy } from "react-icons/md";
import classNames from "classnames";
import { toast } from "react-toastify";
import colorFormatter from "~/helpers/colorFormatter";

export default function ColorButton({ color, selectBrand }) {
  const [ref, hovering] = useHover();

  const copyToClipboard = () => {
    const colorToCopy = `#${color}`;

    navigator.clipboard
      .writeText(colorToCopy)
      .then(() => {
        toast.info(`Copied ${colorToCopy} to clipboard`, {
          position: "bottom-right",
          theme: "dark",
          autoClose: 2000,
        });
      })
      .catch((error) => {
        toast.error("Copy operation failed:", error, {
          position: "bottom-right",
          theme: "dark",
          autoClose: 2000,
        });
      });
  };

  return (
    <button
      onClick={() => {
        copyToClipboard();
      }}
      ref={ref}
      className={classNames(
        "w-[60px] h-10 outline-none border-none flex items-center justify-center",
        { "flex-1": selectBrand }
      )}
      style={{ backgroundColor: `#${color}` }}
    >
      {hovering && (
        <MdOutlineContentCopy
          className="w-6 h-6"
          style={{ color: `${colorFormatter(color)}` }}
        />
      )}
      {selectBrand && hovering && (
        <span
          className="text-[14px] ml-[5px]"
          style={{ color: `${colorFormatter(color)}` }}
        >
          #{color}
        </span>
      )}
    </button>
  );
}
