import ErrorCaption from "./vue-error-caption-component.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vue-error-caption-component", ErrorCaption);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

ErrorCaption.install = install;

export default ErrorCaption;