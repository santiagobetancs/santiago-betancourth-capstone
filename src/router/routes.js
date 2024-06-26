import AboutUsPage from "../pages/AboutUsPage/AboutUsPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import SignupPage from "../pages/SignupPage/SignupPage"

const routes = [
    {
        name: "home",
        path: "/",
        component: HomePage
    },
    {
        name: "log-in",
        path: "/login",
        component: LoginPage
    },
    {
        name: "sign-up",
        path: '/signup',
        component: SignupPage
    },
    {
        name: "about-us",
        path: '/aboutus',
        component: AboutUsPage
    },
    {
        name: "404",
        path: "*",
        component: NotFoundPage
    }
]

export default routes