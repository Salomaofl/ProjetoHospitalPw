import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Formulario from "./Pages/Formulario";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
              <Route path="/form" element={<Formulario />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
