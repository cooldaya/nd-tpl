import { defineCustomElement } from 'vue';
import { kebabCase } from 'lodash-es';
import type { Component } from 'vue';
// 或者如果你想保留一点类型检查
import type { DefineComponent } from 'vue';
/**
 * 自动注册当前目录下所有的 .ce.vue 为 Web Components
 */
export function registerWebComponents() {
  // 1. 获取所有匹配的组件模块
  // Record<文件路径, 模块内容>
  const modules = import.meta.glob('./*.ce.vue', { eager: true }) as Record<string, { default: DefineComponent<{}, {}, any> }>;

  Object.entries(modules).forEach(([path, module]) => {
    // 2. 从路径提取文件名
    // 示例 path: "./MyPopupDialog.ce.vue" -> fileName: "MyPopupDialog"
    const fileName = path.split('/').pop()?.replace('.ce.vue', '');

    if (!fileName) return;

    // 3. 构造标签名：vwc- + kebab-case(文件名)
    // MyPopupDialog -> vwc-my-popup-dialog
    const tagName = `vwc-${kebabCase(fileName)}`;


    console.log({
      tagName
    })

    // 4. 定义自定义元素
    const CustomElement = defineCustomElement(module.default, {
      shadowRoot: false, // 禁用 Shadow DOM，样式将暴露在全局
    });

    // 5. 注册到全局注册表
    if (!customElements.get(tagName)) {
      customElements.define(tagName, CustomElement);
      console.log(`[VWC] Registered: <${tagName}>`);
    }
  });
}


registerWebComponents()
