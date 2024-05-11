import { PuckComponentConfig, ThemeConfig } from "../../types";
import { TextBlockProps } from "./types";
import { convertFontData } from "../../helpers/convertFontData";
import {TextBlock} from "./text-block";

export function TextBlockConfig(
  config: ThemeConfig
): PuckComponentConfig<TextBlockProps, any, any> {
  return {
    fields: {
      text: {
        label: "Text (Markdown)",
        type: "textarea",
      },
      size: {
        label: "Size",
        type: "select",
        options: [
          { label: "Small", value: "text-[calc(14px_+_0.390625vw)]" },
          { label: "Normal", value: "text-[calc(15px_+_0.390625vw)]" },
          { label: "Large", value: "text-[calc(18px_+_0.390625vw)]" },
        ],
      },
      textAlign: {
        label: "Text Alignment",
        type: "radio",
        options: [
          { label: "Left", value: "text-left" },
          { label: "Center", value: "text-center" },
          { label: "Right", value: "text-right" },
        ],
      },
      dimension: {
        label: "Dimensions",
        type: "object",
        objectFields: {
          width: { type: "text" },
          height: { type: "text" },
          lineHeight: { type: "text" },
          margin: { label: "margin (Y X)", type: "text" },
          padding: { label: "padding (Y X)", type: "text" },
        },
      },
      fontFamily: {
        label: "Font family",
        type: "select",
        options: [...convertFontData(config.fonts)],
      },
    },
    defaultProps: {
      text: "Please enter text body here (accepts markdown)",
      size: "text-[calc(15px_+_0.390625vw)]",
      textAlign: "text-left",
      dimension: {
        width: "100%",
        height: "auto",
        lineHeight: 1.7,
        margin: "0",
        padding: "1.5rem 0",
      },
      fontFamily: convertFontData(config.fonts)[0]?.value || "",
    },
    render: TextBlock,
  };
}
