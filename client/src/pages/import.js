import React from "react";

// import ChatPage from "./ChatPage";
// import HomePage from "./HomePage";
// import LoginPage from "./LoginPage";

const ChatPage = React.lazy(() => import("./ChatPage"));
const HomePage = React.lazy(()=> import("./HomePage"));
const LoginPage = React.lazy(()=> import("./LoginPage"));

const mainRoutes = [
    {
        linkLabel: "Home",
        path: "/",
        component: HomePage,
        isProtected: true,
        isNavbarLink: true,
    },
    {
        linkLabel: "Login",
        path: "/login",
        component: LoginPage,
        isProtected: false,
        isNavbarLink: true,
    },
    {
        linkLabel: "Chat",
        path: "/chat",
        component: ChatPage,
        isProtected: true,
        isNavbarLink: true,
    },
];

const footerRoutes = [
    { linkLabel: "Privacy Policy", path: "/privacyPolicy" },
    { linkLabel: "Contact", path: "/contact" },
    { linkLabel: "Copy Rights", path: "/copyRights" }
];


export {mainRoutes, footerRoutes};
