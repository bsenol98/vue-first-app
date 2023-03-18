import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        "path": "/",
        "component": () => import("@/components/TodoList")
    }, {
        "path": "/add-to-do",
        "component": () => import("@/components/TodoForm")
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;