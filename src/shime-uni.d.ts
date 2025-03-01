import type { Toast } from 'wot-design-uni/components/wd-toast/types'

export {}

declare module 'vue' {
  type Hooks = App.AppInstance & Page.PageInstance
  interface ComponentCustomOptions extends Hooks {}
}
declare global{
  interface ImportMetaEnv {
    readonly VITE_HTTP_URL: string
    readonly VITE_API_PREFIX: string
    // 更多环境变量...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

  interface Res<T> {
    data: T
    success: boolean
    message: string
    tips: string
  }
  interface RequestOption {
    toast?: Toast
    url?: string
    data?: any
    method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
    needLoading?: boolean
    loadingMessage?: string
  }
  interface Base {
    id?: string
    createTime?: string
    createUserId?: string
    updateTime?: string
    updateUserId?: string
  }
}
