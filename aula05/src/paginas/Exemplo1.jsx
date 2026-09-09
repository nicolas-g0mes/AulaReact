import {Link} from "react-router-dom";
import "../App.css";

export default function Exemplo1()
{
    const alunos = ["Guilherme","Gustavo", "Felipe", "Ana", "Helena"];

    return (
        <div>
            <h1>Exemplo 1</h1>

            <div className="conteudo">

                <h3>Lista de alunos</h3>

                {alunos.map(
                    (aluno, index) => ( <p>Aluno {index +1 }: {aluno}</p>)
                )}

                <p>
                    O tamanho do vetor é {alunos.length}
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}