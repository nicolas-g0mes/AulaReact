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

                <h3>Professores e Disciplinas</h3>

                <ul>
                    <li><Link to="/professores">Professores</Link></li>
                    <li><Link to="/disciplinas">Disciplinas</Link></li>
                </ul>

                <h3>Notas</h3>

                <ul>
                    <li><Link to="/notas">Lançamento de notas</Link></li>
                    <li><Link to="/relatorio">Relatório e média da sala</Link></li>
                </ul>

            </div>

        </div>
    );
}