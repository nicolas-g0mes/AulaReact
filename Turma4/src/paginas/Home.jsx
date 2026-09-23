import {Link} from "react-router-dom";
import "../App.css";

export default function Home()
{
    return (
        <div>
            <h1>Avaliação Programação Web - Turma 2</h1>

            <div className="conteudo">
                <h3>Exercícios</h3>

                <p>
                    Nicolas de Oliveira Gomes
                </p>
                
                <ul>
                    <li><Link to="/exercicio1">Exercício 1</Link></li>
                    <li><Link to="/exercicio2">Exercício 2</Link></li>
                </ul>               
            </div>
            
        </div>
    );
}