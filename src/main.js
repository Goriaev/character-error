import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import Main from "./components/page/Main.vue";
import App from "./App.vue";
import About from "./components/page/About.vue";
import Character from "./components/page/character/Character.vue";
import Describe from "./components/page/folder/describe/Describe.vue";
import News from "./components/page/news/News.vue";
import FlexBox from "./components/page/flexBox/FlexBox.vue";

const router = createRouter({
  routes: [
    { path: "/", component: Main },
    { path: "/about", component: About },
    { path: "/character", component: Character },
    { path: "/describe", component: Describe },
    { path: "/news", component: News },
    { path: "/flexBox", component: FlexBox },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
