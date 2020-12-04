import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from '@/views/Dashboard'
import Project from '@/views/Project'
import Team from '@/views/Team'

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/project",
        name: "Project",
        component: Project
    },
    {
        path: "/team",
        name: "Team",
        component: Team
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;