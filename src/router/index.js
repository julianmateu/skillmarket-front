import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '@/components/Profile.vue';
import SignUp from '@/components/SignUp.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/users/:id',
        name: 'User Profile Page',
        component: Profile,
    },
    {
        path: '/signup',
        name: 'Sign Up',
        component: SignUp,
    },
];

const router = new VueRouter({
    routes
});

export default router;