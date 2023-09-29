import * as React from "react";
import { useHover } from "@uidotdev/usehooks";
import { MdOutlineContentCopy } from "react-icons/md";

export default function ColorButton({ color }) {
  const [ref, hovering] = useHover();

  const copyToClipboard = () => {
    const colorToCopy = `#${color}`;

    navigator.clipboard
      .writeText(colorToCopy)
      .then(() => {
        console.log(`Copied ${colorToCopy} to clipboard`);
      })
      .catch((error) => {
        console.error("Copy operation failed:", error);
      });
  };

  return (
    <button
      onClick={() => {
        copyToClipboard();
      }}
      ref={ref}
      className="w-[60px] h-10 outline-none border-none flex items-center justify-center"
      style={{ backgroundColor: `#${color}` }}
    >
      {hovering && <MdOutlineContentCopy className="w-6 h-6 text-white" />}
    </button>
  );
}
