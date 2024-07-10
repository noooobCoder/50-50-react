import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ExpandingCardsPage from "./pages/ExpandingCardsPage";
import RandomChoicePickerPage from "./pages/RandomChoicePickerPage";
import AnimatedNavigationPage from "./pages/AnimatedNavigationPage";
import IncrementingCounterPage from "./pages/IncrementingCounterPage";
import DrinkWaterPage from "./pages/DrinkWaterPage";
import MovieAppPage from "./pages/MovieAppPage";
import BackgroundSliderPage from "./pages/BackgroundSliderPage";
import ThemeClockPage from "./pages/ThemeClockPage";
import ButtonRippleEffectPage from "./pages/ButtonRippleEffectPage";
import DragNDropPage from "./pages/DragNDropPage";
import DrawingAppPage from "./pages/DrawingAppPage";
import KineticCssLoaderPage from "./pages/KineticCssLoaderPage";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && <Nav />}
      <Routes>
        <Route path="/expanding-cards" element={<ExpandingCardsPage />} />
        <Route
          path="/random-choice-picker"
          element={<RandomChoicePickerPage />}
        />
        <Route
          path="/animated-navigation"
          element={<AnimatedNavigationPage />}
        ></Route>
        <Route
          path="/incrementing-counter"
          element={<IncrementingCounterPage />}
        ></Route>
        <Route path="/drink-water" element={<DrinkWaterPage />}></Route>
        <Route path="/movie-app" element={<MovieAppPage />}></Route>
        <Route
          path="/background-slider"
          element={<BackgroundSliderPage />}
        ></Route>
        <Route path="/theme-clock" element={<ThemeClockPage />}></Route>
        <Route
          path="/button-ripple-effect"
          element={<ButtonRippleEffectPage />}
        ></Route>
        <Route path="/drag-N-drop" element={<DragNDropPage />}></Route>
        <Route path="/drawing-app" element={<DrawingAppPage />}></Route>
        <Route
          path="/kinetic-css-loader"
          element={<KineticCssLoaderPage />}
        ></Route>
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
