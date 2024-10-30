<h2 style="text-align: center">
uniapp-template
</h2>

## 快速使用

```shell
pnpm degit guan-meng-yuan/uniapp-template your-project-name
```

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) -
就是快！

- 📦 [组件自动化加载](https://uni-helper.js.org/vite-plugin-uni-components)

- 📑 [布局系统](https://uni-helper.js.org/vite-plugin-uni-layouts)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://icon-sets.iconify.design)

- 📥 [API 自动加载](https://github.com/unplugin/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🦾 [TypeScript](https://www.typescriptlang.org/) & [ESLint](https://github.com/antfu/eslint-config) - 保证代码质量

## 常见问题

* 如果您开发的带有原生插件的app，安装请使用 `pnpm i --force` 以保证`@rollup/rollup-darwin-x64`安装成功
* 如果您开发基于原生sdk的android应用，请将原生插件添加到dist/debug目录下并将apk重命名为`android_debug.apk`