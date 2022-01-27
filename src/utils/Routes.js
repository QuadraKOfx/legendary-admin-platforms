import PageHome from "../components/pages/home/home";
import ProfilePage from "../components/pages/profile/profile";

export const COMPONENTS_MATCHING = {
    pageHome: "/"
}

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
];
