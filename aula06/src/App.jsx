import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";

import Consulta from "./paginas/Consulta";
import Visualizar from "./paginas/Visualizar";
import Cadastro from "./paginas/Cadastro";
import Alteracao from "./paginas/Alteracao";
import Exclusao from "./paginas/Exclusao";

import Professores from "./paginas/Professores";
import Disciplinas from "./paginas/Disciplinas";
import Notas from "./paginas/Notas";
import Relatorio from "./paginas/Relatorio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/consulta" element={<Consulta />} />
        <Route path="/visualizar/:codigo" element={<Visualizar />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/alteracao/:codigo" element={<Alteracao />} />
        <Route path="/exclusao/:codigo" element={<Exclusao />} />

        {/* Rotas padrão sem parâmetro :codigo para os links do menu funcionarem corretamente */}
        <Route path="/professores" element={<Professores />} />
        <Route path="/disciplinas" element={<Disciplinas />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/relatorio" element={<Relatorio />} />

        {/* Caso precises também de aceder a uma disciplina/professor específico por código */}
        <Route path="/disciplinas/:codigo" element={<Disciplinas />} />
        <Route path="/professores/:codigo" element={<Professores />} />
        <Route path="/notas/:codigo" element={<Notas />} />
        <Route path="/relatorio/:codigo" element={<Relatorio />} />
      </Routes>
    </BrowserRouter>
  );
}