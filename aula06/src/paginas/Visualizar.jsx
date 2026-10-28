import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "./supabase";

export default function Visualizar()
{
  // pega o código que veio na URL (/visualizar/:codigo)
  const { codigo } = useParams();

  const [aluno, setAluno] = useState({});

  // busca o aluno pelo codigo
  async function carregar()
  {
    const { data, error } = await supabase.from("alunos")
    .select("*").eq("codigo", codigo).single();

    if (error)
    {
      alert("Erro ao buscar aluno: " + error.message);
      return;
    }

    setAluno(data);
  }

  useEffect( () => {carregar()}, [] );
  return (
    <div>
        <h1>Dados do Aluno</h1>

        <div className="conteudo">
          <p>
            <b>Código:</b> {aluno.codigo} <br/>
            <b>Nome:</b> {aluno.nome} <br/>
            <b>Cidade:</b> {aluno.cidade} <br/>
            <b>Estado:</b> {aluno.estado}
          </p>

          <p>
            <Link to="/consulta">Voltar</Link>
          </p>
        </div>
    </div>
  )
}