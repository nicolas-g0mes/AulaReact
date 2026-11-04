import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "./supabase";

export default function Alteracao()
{
  //pega o código que veio na URL (/alteracao/:codigo)
  const {codigo} = useParams();

  const [nome, setNome] = useState ("");
  const [cidade, setCidade] = useState ("");
  const [estado, setEstado] = useState ("");
  const [mensagem, setMensagem] = useState ("");
  const [aguardando, setAguardando] = useState (false);

  //busca o aluno pelo código e preenche os campos
  async function carregar()
  {
    const {data, error} = await supabase.from("alunos").select("*").eq("codigo", codigo).single();

    if (error)
    {
      alert("Erro ao buscar aluno: " + error.message);
      return;
    }

    setNome(data.nome);
    setCidade(data.cidade);
    setEstado(data.estado);
  }

  useEffect( () => {carregar()}, [] );

  async function alterar()
  {
    // Desabilita o botão enquanto aguarda o retorno
    setAguardando(true);

    const alterado = {
      nome: nome,
      cidade: cidade,
      estado: estado
    };

    // Altera o aluno no Supabase
    const {error} = await supabase.from("alunos").update(alterado).eq("codigo", codigo);

    // Habilita o botão novamente
    setAguardando(false);

    // Verifica se ocorreu algum erro
    if (error)
    {
      alert("Erro ao alterar: " + error.message);
      return;
    }

    setMensagem("Aluno alterado com sucesso!");
  }
  return (
    <div>
      <h1>Alteração de Aluno</h1>

      <div className="conteudo">

        <form>
           <p>
              Nome do aluno<br />
              <input type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)} />
            </p>

             <p>
              Cidade<br />
              <input type="text"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)} />
            </p>

             <p>
              Estado<br />
              <input type="text"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      maxLength={2} />
            </p>

            <p>
              <input type="button"
                     value={aguardando ? "Aguarde..." : "Cadastrar"}
                     onClick={alterar}
                     disabled={aguardando} />
            </p>

            <p>
              {mensagem}
            </p>
        </form>

        <p>
          <Link to="/consulta">Voltar</Link>
        </p>
      </div>
    </div>
  )
}