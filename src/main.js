import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "popper.js";
import "./assets/app.scss";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");
