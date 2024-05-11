import { HeadingBlock } from "./heading-block";
import { PuckComponentConfig } from "../../types";
import { HeadingBlockProps } from "./types";
import { ThemeConfig } from "../../types";
import { convertFontData } from "../../helpers/convertFontData";

export function HeadingBlockConfig(
  config: ThemeConfig
): PuckComponentConfig<HeadingBlockProps, any, any> {
  return {
    fields: {
      content: {
        label: "Content",
        type: "text",
      },
      size: {
        label: "Size",
        type: "select",
        options: [
          { label: "L", value: "text-[24px] sm:text-[36px] lg:text-[60px]" },
          { label: "XL", value: "text-[32px] sm:text-[48px] lg:text-[72px]" },
          { label: "XXL", value: "text-[44px] sm:text-[60px] lg:text-[84px]" },
        ],
      },
      align: {
        label: "Align",
        type: "select",
        options: [
          { label: "Left", value: "text-left" },
          { label: "Center", value: "text-center" },
          { label: "Right", value: "text-right" },
        ],
      },
      fontWeight: {
        label: "Font weight",
        type: "radio",
        options: [
          { label: "Light", value: "font-light" },
          { label: "Regular", value: "font-normal" },
          { label: "Bold", value: "font-bold" },
          { label: "XBold", value: "font-black" },
        ],
      },
      fontFamily: {
        label: "Font family",
        type: "select",
        options: [...convertFontData(config.fonts)],
      },
    },
    defaultProps: {
      content: "Heading text",
      align: "text-left",
      size: "text-[24px] sm:text-[36px] lg:text-[60px]",
      fontWeight: "font-bold",
      fontFamily: convertFontData(config.fonts)[0]?.value,
    },
    render: HeadingBlock,
  };
}
