import { VueConstructor } from "vue";

import * as RcComponents from "./components";

export default {
  install(vue: VueConstructor) {
    const components = RcComponents || {};

    if (components) {
      for (const name in components) {
        // @ts-ignore
        const component = components[name];
        if (component) {
          vue.component(name, component);
        }
      }
    }
  }
};
