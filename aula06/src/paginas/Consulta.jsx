import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./supabase";

export default function Consulta()
{

  //variavel de estado para armazenar o select
  const [alunos, setAlunos] = useState( [] );

  async function consultar()
  {
      const { data, error } = await supabase.from("alunos").select("*").order("nome");

      if (error)
      {
        alert("Erro ao consultar: " + error.message);
        return;
      }

      setAlunos( data );
  }

  useEffect( () => {consultar()}, []);

  return (
    <div>
        <h1>Consultando a Tabela de Alunos</h1>

        <div className="conteudo">

          <p>
            Foram retornados {alunos.length} alunos do banco de dados.
          </p>

          {alunos.length > 0 ? (

            <table>
              <tr>
                <th>Nome</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th></th>
              </tr>

              {alunos.map(
                (aluno) => (
                  <tr key={aluno.codigo}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.cidade}</td>
                    <td>{aluno.estado}</td>
                    <td>
                      <Link to={"/visualizar/" + aluno.codigo}>Visualizar</Link>
                    </td>
                  </tr>
                )
              )}
            </table>
          ) : "Não há alunos cadastrados"}

          <p>
            <Link to="/">Voltar</Link>
          </p>
        </div>
    </div>
  )
}