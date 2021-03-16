import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"/frontEnd/template/NewCoder798.github.io/docs/.vuepress/.temp/pages/README.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"/frontEnd/template/NewCoder798.github.io/docs/.vuepress/.temp/pages/404.html.vue")),
}
