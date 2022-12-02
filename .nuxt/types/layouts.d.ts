import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "products"
declare module "/Users/lucasmuenchrath/Documents/cpnt-262-a4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}