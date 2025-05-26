import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "../routes/App.jsx";
import Home from "../routes/Home.jsx";
import About from "./NavbarBtn/About.jsx";
import Contact from "./NavbarBtn/Contact.jsx";
import Service from "./NavbarBtn/Service.jsx";
import Chatbot from "./NavbarBtn/ChatBot.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./NavbarBtn/AddProduct.jsx";
import designerStore from "../store/index.js";
import Bag from "../routes/Bag.jsx";
import ProductDetail from "./NavbarBtn/ProductDetail.jsx";

//authentication
import LoginPage from "./authentication/LoginPage.jsx";
import SignUpForm from "./authentication/SignUp.jsx";
import Payment from "./Heading-Part/Payment.jsx";

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
        { path: "/cart", element: <Bag /> },
        { path: "/product/:itemId", element: <ProductDetail /> },
      ],
    },
    {
      path: "/Login",
      element: <LoginPage />,
    },
    {
      path: "/SignUp",
      element: <SignUpForm />,
    },
    {
      path: "/chatbot",
      element: <Chatbot />,
    },
    {
      path: "/payment",
      element: <Payment />,
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

