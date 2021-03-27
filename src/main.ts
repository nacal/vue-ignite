import Vue from "vue";
import App from "./App.vue";
import { ModuleManager } from "igniteui-webcomponents-core";
import { IgcDataGridModule } from "igniteui-webcomponents-grids";

Vue.config.productionTip = false;

ModuleManager.register(IgcDataGridModule);

Vue.config.ignoredElements = ["igc-data-grid"];

new Vue({
  render: (h) => h(App),
}).$mount("#app");
