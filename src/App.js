import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpandingCardsPage from "./pages/ExpandingCardsPage";
import RandomChoicePickerPage from "./pages/RandomChoicePickerPage";
import AnimatedNavigationPage from "./pages/AnimatedNavigationPage";
import IncrementingCounterPage from "./pages/IncrementingCounterPage";
import DrinkWaterPage from "./pages/DrinkWaterPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
