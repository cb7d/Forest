import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import Forest from "./Forest.vue";
import router from "./router";

// import "./assets/main.css";
import "./assets/Forest.css";

// const app = createApp(App);
const app = createApp(Forest);

app.use(createPinia());
app.use(router);

app.mount("#app");
