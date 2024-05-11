import type {
  ComponentConfig,
  ComponentData,
  DefaultComponentProps,
} from "@measured/puck";

export type PuckComponentConfig<
  TProps extends DefaultComponentProps,
  TState,
  TData extends DefaultComponentProps
> = Omit<
  ComponentConfig<TProps, TState, Omit<ComponentData<TData>, "type">>,
  "type"
>;
interface Font {
  family: string;
  displayName: string; // User-friendly name for the dropdown
}

interface Image {
  id: null | undefined | any;
  url: string;
  alt?: string;
}

export interface ThemeConfig {
  fonts: Font[];
  images: Image[];
}
