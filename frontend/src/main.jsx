import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

//components
import Home from "./components/Home.jsx";
import VideoToSign from "./components/VideoToSign.jsx";
import { Embed } from "./components/Embed.jsx";
import About from "./components/About.jsx"; // Add import for About component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="videoToSign" element={<VideoToSign />} />
      <Route path="learnSign" element={<Embed />} />
      <Route path="about" element={<About />} />{" "}
      {/* Add route for About page */}
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
