import PageHome from "../components/pages/home/home";

export const COMPONENTS_MATCHING = {
    pageHome: "/"
}

export const _routes = [
    {
        key: "pageHome",
        route: "/",
        protected: true,
        component: PageHome
    },
];
