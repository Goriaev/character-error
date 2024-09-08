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
import Work from "./components/page/work/Work.vue";
import Everything from "./components/everything/everything.vue";
import Soccer from "./components/page/soccer/Soccer.vue";
import Tailwindconfig from "./components/page/tailwindconfig/tailwindconfig.vue";
import Calc from "./components/page/calc/calc.vue";
import Inputs from "./components/page/inputs/inputs.vue";
import Notes from "./components/page/notes/notes.vue";

const router = createRouter({
  routes: [
    { path: "/", component: Main },
    { path: "/about", component: About },
    { path: "/character", component: Character },
    { path: "/everything", component: Everything },
    { path: "/describe", component: Describe },
    { path: "/news", component: News },
    { path: "/flexBox", component: FlexBox },
    { path: "/work", component: Work },
    { path: "/soccer", component: Soccer },
    { path: "/tailwindconfig", component: Tailwindconfig },
    { path: "/calc", component: Calc },
    { path: "/inputs", component: Inputs },
    { path: "/notes", component: Notes },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
