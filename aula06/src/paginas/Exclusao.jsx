import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { supabase } from "./supabase";

export default function Exclusao()
{
  //pega o código que veio na URL (/exclusao/:codigo)
  const {codigo} = useParams();
  const [aluno, setAluno] = useState({});
  const navigate = useNavigate();

  async function carregar()
  {
    const {data, error} = await supabase.from("alunos").select("*").eq("codigo", codigo).single();

    if (error)
    {
      alert("Erro ao buscar aluno: " + error.message);
      return;
    }

    setAluno(data);
  }
  useEffect( () => {carregar()}, [] );

  async function excluir()
  {
    const {error} = await supabase.from("alunos").delete().eq("codigo", codigo);

    if (error)
    {
      alert("Erro ao excluir: " + error.message);
      return;
    }

    alert("Aluno excluído com sucesso!");
    navigate("/consulta");
  }
  return (
    <div>
      <h1>Exclusão de Aluno</h1>

      <div className="conteudo">

        <p>Deseja realmente excluir o aluno abaixo?</p>

        <p>
          <b>Nome:</b> {aluno.nome} <br />
          <b>Cidade:</b> {aluno.cidade} <br />
          <b>Estado:</b> {aluno.estado} <br />
        </p>

        <p>
              <input type="button"
                     value="Excluir"
                     onClick={excluir}/>
            </p>

        <p>
          <Link to="/consulta">Cancelar</Link>
        </p>
      </div>
    </div>
  )
}