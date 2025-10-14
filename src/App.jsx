import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListaPokemones from "./pages/ListaPokemones.jsx";
import DetallePokemon from "./pages/DetallePokemon.jsx";
import NavBar from "./components/NavBar.jsx";
import "./styles/App.css";
function App() {
  return (
    <>
      <Router>
        <NavBar />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<ListaPokemones />} />
            <Route path="/pokemones/:id" element={<DetallePokemon />} />
            <Route
              path="*"
              element={<h1>Error 404 - Página no encontrada</h1>}
            />
          </Routes>
      </Router>
    </>
  );
}

export default App;
