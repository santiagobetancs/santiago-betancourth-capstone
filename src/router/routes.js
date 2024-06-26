import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
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
    }
]

export default routes