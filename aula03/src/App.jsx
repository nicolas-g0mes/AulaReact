import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import MinasGerais from "./paginas/MinasGerais";
import RioJaneiro from "./paginas/RioJaneiro";
import EspiritoSanto from "./paginas/EspiritoSanto";

export default function App() 
{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/estados/sp" element={<SaoPaulo />} />
      <Route path="/estados/mg" element={<MinasGerais />} />
      <Route path="/estados/rj" element={<RioJaneiro />} />
      <Route path="/estados/es" element={<EspiritoSanto />} />
    </Routes>
    </BrowserRouter>
  );
}