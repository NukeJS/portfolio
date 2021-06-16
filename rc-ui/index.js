import * as RcComponents from "./components";

export default {
  install(vue) {
    const components = RcComponents || {};

    if (components) {
      for (const name in components) {
        const component = components[name];
        if (component) {
          vue.component(name, component);
        }
      }
    }
  }
};
