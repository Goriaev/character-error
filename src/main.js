import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import Main from "./components/page/Main.vue";
import App from "./App.vue";
import About from "./components/page/About.vue";
import Character from "./components/page/character/Character.vue";

const router = createRouter({
  routes: [
    { path: "/", component: Main },
    { path: "/about", component: About },
    { path: "/character", component: Character },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
