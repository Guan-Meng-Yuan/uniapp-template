import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(async () => {
    const UnoCSS = (await import("unocss/vite")).default;
    return {
        plugins: [
            AutoImport({
                imports: [
                    'vue',
                    'uni-app',
                ]
            })
            , uni(), UnoCSS()],
    }
});
