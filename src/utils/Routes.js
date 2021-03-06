import PageHome from "../components/pages/home/home";
import ProfilePage from "../components/pages/profile/profile";
import RegisterPage from "../components/pages/auth/register";
import LoginPage from "../components/pages/auth/login";

// export const COMPONENTS_MATCHING = {
//     pageHome: "/"
// }

export const _routes = [
    {
        key: "pageHome",
        alt: "Home",
        route: "/",
        protected: true,
        component: PageHome
    },
    {
        key: "profilePage",
        alt: "Profile",
        route: "/profile",
        protected: true,
        component: ProfilePage
    },
    {
        key: "registerPage",
        alt: "Register",
        route: "/register",
        protected: true,
        component: RegisterPage
    },
    {
        key: "loginPage",
        alt: "Login",
        route: "/login",
        protected: true,
        component: LoginPage
    },
];
