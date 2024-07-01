//创建一个应用实例对象
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// 1.以App作为参数生成一个应用实例对象
// 2.挂载到id为app的节点上
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router); //配置路由

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount("#app");


