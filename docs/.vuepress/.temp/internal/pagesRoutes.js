import { Vuepress } from '@vuepress/client/lib/components/Vuepress'
import pageRoutes0 from '/frontEnd/template/articles/docs/.vuepress/.temp/internal/pageRoutes/v-8daa1a0e.js'
import pageRoutes1 from '/frontEnd/template/articles/docs/.vuepress/.temp/internal/pageRoutes/v-3706649a.js'
import pageRoutes2 from '/frontEnd/template/articles/docs/.vuepress/.temp/internal/pageRoutes/v-744e35e2.js'

export const pagesRoutes = [
  ...pageRoutes0,
  ...pageRoutes1,
  ...pageRoutes2,
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress,
  },
]
