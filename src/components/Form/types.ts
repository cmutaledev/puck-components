export interface FormProps {
  action: string;
  inputs: {
    label: string;
    placeholder: string;
    type: string;
    id: string;
    displayLabel: string;
  }[];
}
