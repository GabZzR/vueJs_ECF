import Vue from 'vue'
import VueRouter from 'vue-router'
import MagicCardHomeView from '../views/MagicCardHomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: MagicCardHomeView
    },
    {
        path: '/collection',
        name: 'coll',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/MagicCardCollView.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () =>
            import ('../views/MagicCardDetailView.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router