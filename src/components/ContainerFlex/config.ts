import { PuckComponentConfig } from "../../types";
import { ContainerFlex } from "./container-flex";
import { ContainerFlexProps } from "./types";

export function ContainerFlexConfig(): PuckComponentConfig<
  ContainerFlexProps,
  any,
  any
> {
  return {
    fields: {
      items: {
        label: "Items",
        type: "array",
        arrayFields: {
          minItemWidth: {
            label: "Minimum Item Width",
            type: "number",
            min: 0,
          },
        },
        getItemSummary: (_, id) => `Item ${id! + 1}`,
      },
      minItemWidth: {
        label: "Minimum Item Width",
        type: "number",
        min: 0,
      },
      horizontalAlignment: {
        label: "Justify Items",
        type: "radio",
        options: [
          { label: "default", value: "justify-start" },
          { label: "center", value: "justify-center" },
          { label: "between", value: "justify-between" },
        ],
      },
      verticalAlignment: {
        label: "Align Items",
        type: "radio",
        options: [
          { label: "center", value: "items-center" },
          { label: "start", value: "items-start" },
          { label: "end", value: "items-end" },
        ],
      },
      alignContent: {
        label: "Align Content",
        type: "radio",
        options: [
          { label: "auto", value: "flex justify-start" },
          { label: "center", value: "flex justify-center" },
          { label: "end", value: "flex justify-end" },
        ],
      },
    },
    defaultProps: {
      items: [{}, {}],
      minItemWidth: 350,
      horizontalAlignment: "justify-start",
      verticalAlignment: "items-start",
      alignContent: "flex justify-start",
    },
    render: ContainerFlex,
  };
}
