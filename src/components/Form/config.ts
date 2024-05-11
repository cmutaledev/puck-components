import { PuckComponentConfig } from "../../types";
import { Form } from "./form";
import { FormProps } from "./types";

export function FormConfig(): PuckComponentConfig<FormProps, any, any> {
  return {
    fields: {
      action: { type: "text" },
      inputs: {
        label: "Input Fields",
        type: "array",
        getItemSummary: (item) => `Input ${item.label}`,
        arrayFields: {
          label: { type: "text" },
          placeholder: { type: "text" },
          type: {
            type: "select",
            options: [
              { label: "Text", value: "text" },
              { label: "Email", value: "email" },
              { label: "Password", value: "password" },
              { label: "Textarea", value: "textarea" },
              { label: "Checkbox", value: "checkbox" },
            ],
          },
          id: { type: "text" },
          displayLabel: {
            type: "radio",
            label: "Display Label",
            options: [
              { label: "Yes", value: "" },
              { label: "No", value: "sr-only" },
            ],
          },
        },
      },
    },
    defaultProps: {
      action: "#",
      inputs: [
        {
          label: "Email",
          type: "email",
          placeholder: "mail@example.com",
        },
      ],
    },
    render: Form,
  };
}
