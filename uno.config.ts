import {defineConfig, presetAttributify, presetIcons, presetTypography, presetUno} from 'unocss'
import {presetApplet, presetRemRpx, transformerAttributify} from 'unocss-applet'

// uni-app
const isApplet = process.env.UNI_PLATFORM?.startsWith('mp-') ?? false
// taro
// const isApplet = process.env.TARO_ENV !== 'h5' ?? false
const presets: any[] = []
const transformers: any[] = []

if (isApplet) {
    presets.push(presetApplet())
    presets.push(presetRemRpx())
    transformers.push(transformerAttributify({ignoreAttributes: ['block']}))
} else {
    presets.push(presetApplet())
    presets.push(presetAttributify())
    presets.push(presetRemRpx({mode: 'rpx2rem'}))
}
export default defineConfig({
    presets: [
        presetUno(),
        presetIcons(),
        presetTypography(),
        ...presets,
    ],
    transformers: [
        // ...
        ...transformers,
    ],
    shortcuts: [{
        'c-p': 'c-#4d80f0',
        'c-tip': 'c-#bfbfbf',
        'h-f': 'h-94.8459vh',
    }],
})
