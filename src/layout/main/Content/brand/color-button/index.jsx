import * as React from "react";
import { useHover } from "@uidotdev/usehooks";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: `${colorFormatter(color)}` }}
          className="w-6 h-6"
          viewBox="0 -960 960 960"
        >
          <path
            fill="currentColor"
            d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
          />
        </svg>
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
