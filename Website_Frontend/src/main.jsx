<<<<<<< HEAD
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
=======
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "../routes/App.jsx";
import Home from "../routes/Home.jsx";
import Login from "./PersonalDetail/LoginPage.jsx";
import About from "./NavbarBtn/About.jsx";
import SignupForm from "./PersonalDetail/SignUp.jsx";
import Contact from "./NavbarBtn/Contact.jsx";
import Service from "./NavbarBtn/Service.jsx";
import Chatbot from "./NavbarBtn/ChatBot.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./NavbarBtn/AddProduct.jsx";
import designerStore from "../store/index.js";
import Bag from "../routes/Bag.jsx";

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

// I need an interior design concept for a [residential/commercial] space with a [modern/minimalist/classic/bohemian/industrial/etc.] style. The space includes [living room, bedroom, office, kitchen, etc.], and I want it to feel [cozy, luxurious, spacious, warm, elegant, etc.]. The color palette should feature [neutral tones, bold colors, earthy hues, pastel shades, etc.]

// A sleek, modern living room with a neutral palette, marble coffee table, plush sofa, ambient lighting, and floor-to-ceiling windows.

// I need an interior design concept for a modern minimalist living room that feels warm, inviting, and functional. The space is 20x15 feet with a large window providing natural light. The design should focus on neutral tones (white, beige, and gray) with wood accents for warmth.

// name: 'Modern Wooden Table',
//   description: 'A beautifully crafted wooden table with a minimalist design.',
//   current_price: '3500',
//   original_price: '5000',
//   imageUrl: 'http://thewowstyle.com/wp-content/uploads/2015/01/Home-Interior-Design-Hd-Wallpaper-Hd-Background-With-Simple-Staircase-And-Plasma-TV-Also-Nice-Laminate-Flooring-Ideas-With-Modern-Furniture-Interior-Minimalist-Design.jpg'
>>>>>>> 187e5ac (termperory work)
