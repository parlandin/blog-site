import notistack from "notistack";

declare module "notistack" {
  export interface VariantOverrides {
    loading: true;
  }
}
