import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/lucasmuenchrath/Documents/cpnt-262-a4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}