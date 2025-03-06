import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Home from "./NavbarBtn/Home.jsx";
import Login from "./PersonalDetail/LoginPage.jsx";
import About from "./NavbarBtn/About.jsx";
import SignupForm from "./PersonalDetail/SignUp.jsx";
import Contact from "./NavbarBtn/Contact.jsx";
import Service from "./NavbarBtn/Service.jsx";
import Chatbot from "./NavbarBtn/ChatBot.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./NavbarBtn/AddProduct.jsx";
import AddToCart from "./NavbarBtn/AddToCart.jsx";
import designerStore from "../store/index.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "/Home", element: <Home /> },
        { path: "/About", element: <About /> },
        { path: "/Contact", element: <Contact /> },
        { path: "/Service", element: <Service /> },
        { path: "/addProduct", element: <AddProduct /> },
        { path: "/cart", element: <AddToCart /> },
      ],
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <SignupForm />,
    },
    {
      path: "/chatbot",
      element: <Chatbot />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_startTransition: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={designerStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
