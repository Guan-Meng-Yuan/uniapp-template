import { defineConfig, presetIcons, presetMini, presetTypography } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    presetUni(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  shortcuts: [
    { 'c-primary': 'c-#4d80f0' },
  ],
})
