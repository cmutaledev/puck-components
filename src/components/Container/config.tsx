import { convertFontData } from "../../helpers/convertFontData";
import ImagePicker from "../../helpers/image-picker";
import { PuckComponentConfig, ThemeConfig } from "../../types";
import { Container } from "./container";
import { ContainerProps } from "./types";
import { FieldLabel } from "@measured/puck";

export function ContainerConfig(
  config: ThemeConfig
): PuckComponentConfig<ContainerProps, any, any> {
  return {
    fields: {
      postionToWindow: {
        type: "select",
        label: "Position to Window",
        options: [
          { label: "stick-to-top", value: "absolute top-0 left-0 right-0" },
          {
            label: "stick-to-top (on scroll)",
            value: "fixed top-0 left-0 right-0",
          },
          {
            label: "stick-to-bottom",
            value: "absolute bottom-0 left-0 right-0",
          },
          {
            label: "stick-to-bottom (on scroll)",
            value: "fixed bottom-0 left-0 right-0",
          },
          { label: "default", value: "relative" },
        ],
      },
      dimension: {
        label: "Dimensions",
        type: "object",
        objectFields: {
          width: { type: "text" },
          height: { type: "text" },
          lineHeight: { type: "number" },
          margin: { label: "margin (Y X)", type: "text" },
          padding: { label: "padding (Y X)", type: "text" },
        },
      },
      columns: {
        label: "Columns",
        type: "object",
        objectFields: {
          columns: {
            label: "columns",
            type: "array",
            getItemSummary: (col, id: any) => `
                        col ${id + 1}, span ${col.span ? Math.max(Math.min(col.span, 12), 1) : "auto"
              }`,
            arrayFields: {
              span: {
                label: "Span (1-12)",
                type: "number",
                min: 0,
                max: 12,
              },
            },
          },
          distribution: {
            type: "radio",
            options: [
              {
                value: "auto",
                label: "Auto",
              },
              {
                value: "manual",
                label: "Manual",
              },
            ],
          },
        },
      },
      content: {
        label: "Content",
        type: "object",
        objectFields: {
          position: {
            label: "positioning",
            type: "select",
            options: [
              { value: "auto", label: "Auto" },
              { value: "place-items-center", label: "Top" },
              { value: "place-items-end", label: "Top Right" },
              {
                value: "place-content-center place-items-start",
                label: "Center Left",
              },
              {
                value: "place-items-center place-content-center",
                label: "Center",
              },
              {
                value: "place-content-center place-items-end",
                label: "Center Right",
              },
              { value: "place-content-end", label: "Bottom Left" },
              {
                value: "place-content-end place-items-center",
                label: "Bottom",
              },
              {
                value: "place-content-end place-items-end",
                label: "Bottom Right",
              },
            ],
          },
          spacing: { type: "text" },
          textColor: { label: "foreground color", type: "text" },
          textAlign: {
            label: "align content",
            type: "radio",
            options: [
              { label: "Left", value: "text-left flex justify-start" },
              { label: "Center", value: "text-center flex justify-center" },
              { label: "Right", value: "text-right flex justify-end" },
            ],
          },
        },
      },
      fontFamily: {
        label: "Font Face",
        type: "select",
        options: [...convertFontData(config.fonts)],
      },
      background: {
        type: "object",
        label: "Background",
        objectFields: {
          backgroundColor: { label: "background color", type: "text" },
          backgroundImage: {
            type: "custom",
            label: "background image",
            render: ({ field, onChange }) => (
              <FieldLabel label={field.label!}>
                <ImagePicker
                  onChange={onChange} config={config} />
              </FieldLabel>
            ),
          },
          backgroundPositionX: { label: "position (x-axis)", type: "text" },
          backgroundPositionY: { label: "position (y-axis)", type: "text" },
          tint: {
            label: "overlay",
            type: "radio",
            options: [
              { label: "0", value: "after:opacity-0" },
              { label: "25%", value: "after:opacity-25" },
              { label: "50%", value: "after:opacity-50" },
              { label: "75%", value: "after:opacity-75" },
            ],
          },
        },
      },
    },
    defaultProps: {
      postionToWindow: "relative",
      background: {
        backgroundColor: "",
        backgroundImage: "",
        backgroundPositionX: "",
        backgroundPositionY: "",
        tint: "after:opacity-0",
      },
      content: {
        position: "auto",
        spacing: "1rem",
        layout: "auto",
        textColor: "inherit",
        textAlign: "left",
      },
      dimension: {
        width: "100%",
        height: "auto",
        lineHeight: 1.7,
        margin: "0",
        padding: "1.5rem",
      },
      columns: {
        columns: [{}],
        distribution: "auto",
      },
      fontFamily: convertFontData(config.fonts)[0]?.value,
    },
    render: Container,
  };
}
