import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"/frontEnd/template/articles/docs/.vuepress/.temp/pages/README.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"/frontEnd/template/articles/docs/.vuepress/.temp/pages/404.html.vue")),
  "/vue/": defineAsyncComponent(() => import(/* webpackChunkName: "v-744e35e2" */"/frontEnd/template/articles/docs/.vuepress/.temp/pages/vue/README.vue")),
}
