import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rescues from '../views/Rescues.vue'
import Rescue from '../views/subfolders/Rescue.vue'
import TripPlan from '../views/subfolders/TripPlan.vue'
import TripPlanning from '../views/TripPlanning.vue'
import Covid from '../views/Covid.vue'
import Skills from '../views/Skills.vue'
import Skill from '../views/subfolders/Skill.vue'
import EnvSci from '../views/EnvSci.vue'
import Wildlife from '../views/subfolders/Wildlife.vue'
import Flora from '../views/subfolders/Flora.vue'
import Geology from '../views/subfolders/Geology.vue'
import Ecology from '../views/subfolders/Ecology.vue'

const scrollToTop = (to, from, next) => {
  const screenPos = window.pageYOffset

  if(screenPos > 265){
    window.scrollTo(0, 183)
    next()
  } else {
    next()
  }
  // console.log(window);

}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: scrollToTop
  },
  {
    path: '/env-sci',
    name: 'EnvSci',
    component: EnvSci,
    beforeEnter: scrollToTop
  },
  {
    path: '/env-sci/ecology',
    name: 'Ecology',
    component: Ecology,
    beforeEnter: scrollToTop
  },
  {
    path: '/env-sci/geology',
    name: 'Geology',
    component: Geology,
    beforeEnter: scrollToTop
  },
  {
    path: '/env-sci/wildlife',
    name: 'Wildlife',
    component: Wildlife,
    beforeEnter: scrollToTop
  },
  {
    path: '/env-sci/Flora',
    name: 'Flora',
    component: Flora,
    beforeEnter: scrollToTop
  },
  {
    path: '/skills/:skill',
    name: 'Skill',
    component: Skill,
    props: true,
    beforeEnter: scrollToTop
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    beforeEnter: scrollToTop
  },
  {
    path: '/covid',
    name: 'Covid',
    component: Covid,
    beforeEnter: scrollToTop
  },
  {
    path: '/trip-planning/:id',
    name: 'TripPlan',
    component: TripPlan,
    props: true,
    beforeEnter: scrollToTop
  },
  {
    path: '/trip-planning',
    name: 'TripPlanning',
    component: TripPlanning,
    beforeEnter: scrollToTop
  },
  {
    path: '/rescues/:rescue',
    name: 'Rescue',
    component: Rescue,
    props: true,
    beforeEnter: scrollToTop
  },
  {
    path: '/rescues',
    name: 'Rescues',
    component: Rescues,
    beforeEnter: scrollToTop
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
