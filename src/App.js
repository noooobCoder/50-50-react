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
  return (
    <div>
      <h1>Only For Convenient</h1>
      <nav>
        <ul>
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
