//创建一个应用实例对象
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// 1.以App作为参数生成一个应用实例对象
// 2.挂载到id为app的节点上

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router); //配置路由

app.mount("#app");
