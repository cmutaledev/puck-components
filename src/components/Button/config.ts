import { PuckComponentConfig } from "../../types";
import { Button } from "./button";
import { ButtonProps } from "./types";

export function ButtonConfig(): PuckComponentConfig<ButtonProps, any, any> {
  return {
    fields: {
      label: { type: "text" },
      variant: {
        type: "select",
        options: [
          {
            label: "Default",
            value:
              "bg-site-primary text-site-primary-foreground hover:bg-site-primary/90",
          },
          {
            label: "Outline",
            value:
              "border border-site-secondary bg-transparent hover:bg-site-accent hover:text-site-accent-foreground",
          },
          {
            label: "Secondary",
            value:
              "bg-site-secondary text-site-secondary-foreground hover:bg-site-secondary/80",
          },
        ],
      },
      size: {
        type: "select",
        options: [
          { label: "Default", value: "h-12 px-4 py-2" },
          { label: "Small", value: "h-10 px-3" },
          { label: "Large", value: "h-14 px-10" },
          { label: "Icon", value: "h-10 w-10" },
        ],
      },
    },
    defaultProps: {
      label: "Button",
      variant:
        "bg-site-primary text-site-primary-foreground hover:bg-site-primary/90",
      size: "h-12 px-4 py-2",
    },
    render: Button,
  };
}
