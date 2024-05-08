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
