import AboutUsPage from "../pages/AboutUsPage/AboutUsPage"
import WelcomePage from "../pages/WelcomePage/WelcomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import SignupPage from "../pages/SignupPage/SignupPage"

const routes = [
    {
        name: "home",
        path: "/",
        component: WelcomePage
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