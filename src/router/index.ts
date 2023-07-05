import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventOrganizerView from '../views/EventOrganizerView.vue'
import StudentListView from "../views/StudentListView.vue"
import EventDetailView from "../views/EventDetailView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/organizer',
      name: 'organizer',
      component: EventOrganizerView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentListView
    },
    {
      path : '/event/:id',
      name : 'event-detail',
      component : EventDetailView,
      props : true
    }
  ]
})

export default router
