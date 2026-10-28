import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./supabase";

export default function Cadastro()
{
  const [nome, setNome] = useState ("");
  const [cidade, setCidade] = useState ("");
  const [estado, setEstado] = useState ("");
  const [mensagem, setMensagem] = useState ("");
  const [aguardando, setAguardando] = useState (false);

  async function cadastrar()
  {
    // Desabilita o botão enquanto aguarda o retorno
    setAguardando (true);

    const novo = {
      nome : nome,
      cidade : cidade,
      estado : estado
    };

    // Insere o aluno no Supabase
    const {error} = await supabase.from("alunos").insert([novo]);

    // Habilita o botão novamente
    setAguardando(false);

    // Verifica se ocorreu algum erro
    if (error)
    {
      alert("Erro ao cadastrar: " + error.message);
      return;
    }

    setMensagem("Aluno cadastrado com sucesso!");

    // Limpa os campos
    setNome("");
    setCidade("");
    setEstado("");
  }

  return (
    <div>
        <h1>Cadastro de Novos Alunos</h1>  

        <div className="conteudo">

          <form>
            <p>
              Digite o nome do aluno<br />
              <input type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)} />
            </p>

             <p>
              Digite a cidade<br />
              <input type="text"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)} />
            </p>

             <p>
              Digite o estado<br />
              <input type="text"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      maxLength={2} />
            </p>

            <p>
              <input type="button"
                     value={aguardando ? "Aguarde..." : "Cadastrar"}
                     onClick={cadastrar}
                     disabled={aguardando} />
            </p>

            <p>
              {mensagem}
            </p>
          </form>

          <p>
            <Link to="/">Voltar</Link>
          </p>
        </div>
    </div>
  )
}