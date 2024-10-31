import uniModule from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default async () => {
  // @ts-expect-error missing types
  const Uni = uniModule.default || uniModule
  return defineConfig({
    plugins: [

      UniLayouts(),
      AutoImport({
        imports: [
          'vue',
          'uni-app',
          'vue-i18n',
        ],
      }),
      UnoCSS(),
      Components({
        resolvers: [WotResolver()],
      }),
      Uni(),
    ],

  })
}
