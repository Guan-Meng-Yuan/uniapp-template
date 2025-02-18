/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // @ts-expect-error 忽略错误
  const component: DefineComponent<object, object, any>
  export default component
}
