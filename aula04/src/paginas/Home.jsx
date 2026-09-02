import {Link} from "react-router-dom";
import "../App.css";

export default function Home()
{
    return (
        <div>
            <h1>Aula 04 - Estudo de Variáveis de Estado</h1>

            <div className="conteudo">

                <h3>Exemplos</h3>

                <ul>
                    <li><Link to="/exemplo1">Exemplo 1</Link></li>
                    <li><Link to="/exemplo2">Exemplo 2</Link></li>
                </ul>

                <h3>Exercícios</h3>

                <ul>
                    <li><Link to="/exercicio1">Exercício 1</Link></li>
                    <li><Link to="/exercicio2">Exercício 2</Link></li>
                    <li><Link to="/exercicio3">Exercício 3</Link></li>
                    <li><Link to="/exercicio4">Exercício 4</Link></li>
                    <li><Link to="/exercicio5">Exercício 5</Link></li>
                    <li><Link to="/exercicio6">Exercício 6</Link></li>
                    <li><Link to="/exercicio7">Exercício 7</Link></li>
                    <li><Link to="/exercicio8">Exercício 8</Link></li>
                    <li><Link to="/exercicio9">Exercício 9</Link></li>
                    <li><Link to="/exercicio10">Exercício 10</Link></li>
                </ul>

            </div>
            
        </div>
    );
}