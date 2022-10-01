export interface Route {
  path: string;
  layout: boolean;
  component: () => JSX.Element;
}
