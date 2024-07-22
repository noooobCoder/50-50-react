import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";

function App() {
  // PageLoader();
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && <Nav />}
      <Routes>
        <Route path="/*" element={<PageLoader />} />
      </Routes>
    </div>
  );
}

const Nav = () => {
  // const requirePage = require.context("./pages", true, /index\.js$/);
  // const pages = requirePage.keys().map((page) =>
  //   page
  //     .replace("./", "")
  //     .replace("/index.js", "")
  //     .replace("Page", "")
  //     .replace(/([a-z])([A-Z])/g, "$1-$2")
  //     .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
  //     .toLowerCase()
  // );
  return (
    <div>
      <h1>Only For Convenient</h1>
      <nav>
        <ul>
          {/* {pages.map((page) => (
            <li key={page}>
              <a href={`/${page}`} target="_blank" rel="noopener noreferrer">
                {page
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </a>
            </li>
          ))} */}
          <li>
            <a
              href="/expanding-cards"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expanding Cards
            </a>
          </li>
          <li>
            <a
              href="/random-choice-picker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Random Choice Picker
            </a>
          </li>
          <li>
            <a
              href="/animated-navigation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Animated Navigation
            </a>
          </li>
          <li>
            <a
              href="/incrementing-counter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Incrementing Counter
            </a>
          </li>
          <li>
            <a href="/drink-water" target="_blank" rel="noopener noreferrer">
              Drink Water
            </a>
          </li>
          <li>
            <a href="/movie-app" target="_blank" rel="noopener noreferrer">
              Movie App
            </a>
          </li>
          <li>
            <a
              href="/background-slider"
              target="_blank"
              rel="noopener noreferrer"
            >
              Background Slider
            </a>
          </li>
          <li>
            <a href="/theme-clock" target="_blank" rel="noopener noreferrer">
              Theme Clock
            </a>
          </li>
          <li>
            <a
              href="/button-ripple-effect"
              target="_blank"
              rel="noopener noreferrer"
            >
              Button Ripple Effect
            </a>
          </li>
          <li>
            <a href="/drag-N-drop" target="_blank" rel="noopener noreferrer">
              Drag N Drop
            </a>
          </li>
          <li>
            <a href="/drawing-app" target="_blank" rel="noopener noreferrer">
              Drawing App
            </a>
          </li>
          <li>
            <a
              href="/kinetic-css-loader"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kinetic Css Loader
            </a>
          </li>
          <li>
            <a
              href="/content-placeholder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Content Placeholder
            </a>
          </li>
          <li>
            <a href="/sticky-navbar" target="_blank" rel="noopener noreferrer">
              Sticky Navbar
            </a>
          </li>
          <li>
            <a
              href="/double-vertical-slider"
              target="_blank"
              rel="noopener noreferrer"
            >
              Double Vertical Slider
            </a>
          </li>
          <li>
            <a
              href="/toast-notification"
              target="_blank"
              rel="noopener noreferrer"
            >
              Toast Notification
            </a>
          </li>
          <li>
            <a
              href="/github-profiles"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Profiles
            </a>
          </li>
          <li>
            <a
              href="/double-click-heart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Double Click Heart
            </a>
          </li>
          <li>
            <a
              href="/auto-text-effect"
              target="_blank"
              rel="noopener noreferrer"
            >
              Auto Text Effect
            </a>
          </li>
          <li>
            <a
              href="/password-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Password Generator
            </a>
          </li>
          <li>
            <a
              href="/good-cheap-fast"
              target="_blank"
              rel="noopener noreferrer"
            >
              Good Cheap Fast
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
