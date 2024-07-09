import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
