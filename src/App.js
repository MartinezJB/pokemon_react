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
      {/* <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>404 not found (crear el componente)</p>
          </main>
        }
      /> */}
    </Routes>
  </BrowserRouter>
        
  );
}
/* <Router>
      <Switch>
        <Route path="/">
          <Game />
        </Route>
      </Switch>
    </Router> */