import VuelidateCaption from "./vuelidate-caption.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vuelidate-caption", VuelidateCaption);
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

VuelidateCaption.install = install;

export default VuelidateCaption;