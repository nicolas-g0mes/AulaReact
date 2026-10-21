import { Link } from "react-router-dom";

export default function Home()
{
    return(
        <div>
            <h1>Aula 06 - CRUD com React e Supabase</h1>

            <div className="conteudo">

                <h3>Tabela de Alunos</h3>

                <ul>
                    <li><Link to="/consulta">Consulta a tabela de alunos</Link></li>
                    <li><Link to="/cadastro">Cadastro de Novos Alunos</Link></li>
                </ul>

            </div>

        </div>
    );
}