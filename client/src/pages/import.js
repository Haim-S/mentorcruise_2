import React from "react";

// import ChatPage from "./ChatPage";
// import HomePage from "./HomePage";
// import LoginPage from "./LoginPage";

const ChatPage = React.lazy(() => import("./ChatPage"));
const HomePage = React.lazy(()=> import("./HomePage"));
const LoginPage = React.lazy(()=> import("./LoginPage"));
const ProfilePage = React.lazy(()=> import("./ProfilePage"));
const PrivacyPolicyPage = React.lazy(()=> import("./PrivacyPolicyPage"));

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
        path: "/chat/",
        component: ChatPage,
        isProtected: true,
        isNavbarLink: true,
    },
    {
        linkLabel: "Chat User ID",
        path: "/chat/:userId",
        component: ChatPage,
        isProtected: true,
        isNavbarLink: false,
      },
];

const footerRoutes = [
    { linkLabel: "Privacy Policy", path: "/privacyPolicy", component: PrivacyPolicyPage, isProtected: true, },
    { linkLabel: "Contact", path: "/contact" },
    { linkLabel: "Copy Rights", path: "/copyRights" }
];


export {mainRoutes, footerRoutes};

