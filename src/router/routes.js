import AboutUsPage from "../pages/AboutUsPage/AboutUsPage"
import WelcomePage from "../pages/WelcomePage/WelcomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import RecPage from "../pages/RecPage/RecPage"
import BookPage from "../pages/BookPage/BookPage"

const routes = [
    {
        name: "welcome",
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
        name: "home",
        path: '/home/:id',
        component: HomePage
    },
    {
        name: "profile",
        path: 'profile/:id',
        component: ProfilePage
    },
    {
        name: "recommendations",
        path: "/recommendations/:id",
        component: RecPage
    },
    {
        name: "books",
        path: "recommendations/:id/:book",
        component: BookPage
    },
    {
        name: "404",
        path: "*",
        component: NotFoundPage
    }
]

export default routes