import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Game from "./pages/Game";
import PokemonSelector from "./pages/PokemonSelector"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<PokemonSelector />} />
      <Route path="/game/:player_id/:enemy_id" element={<Game />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  </BrowserRouter>
        
  );
}