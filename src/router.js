import { createRouter, createWebHistory } from "vue-router";
import DCHeros from "./pages/DCHeros"
import EventCalendar from "./pages/EventCalendar";
import HomePage from "./pages/HomePage"
import MarkDown from "./pages/MarkDown"
import SliderApp from "./pages/SliderApp"
import Calculator from "./pages/Calculator";
import ReusableModal from "./pages/ReusableModal";
import Chats from "./pages/Chats";

const routes = [
    {
        path: '/', component: HomePage
    },
    {
        path: '/dc-heros', component: DCHeros
    },
    {
        path: '/calendar', component: EventCalendar
    },
    {
        path: '/markdown', component: MarkDown
    },
    {
        path: '/slider', component: SliderApp
    },
    {
        path: '/calculator', component: Calculator
    },
    {
        path: '/reusable-modal', component: ReusableModal
    },
    {
        path: '/chat', component: Chats
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;