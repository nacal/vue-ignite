import Vue from "vue";
import App from "./App.vue";
import { ModuleManager } from "igniteui-webcomponents-core";
import { IgcDataGridModule } from "igniteui-webcomponents-grids";
import { IgcCategoryChartModule } from "igniteui-webcomponents-charts";

Vue.config.productionTip = false;

ModuleManager.register(IgcDataGridModule, IgcCategoryChartModule);

Vue.config.ignoredElements = ["igc-data-grid", "igc-category-chart"];

new Vue({
  render: (h) => h(App),
}).$mount("#app");
