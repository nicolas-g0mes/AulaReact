import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio1()
{
    const[numero, setNumero] = useState();
    const[resultado, setResultado] = useState();

    function calcular(){
        let quadrado, cubo;

        quadrado = Number(numero) **2;
        cubo = Number(numero) ** 3;

        setResultado (
            <div>
                <p>O quadrado do numero é: {quadrado}</p>
                <p>O cubo do numero é: {cubo}</p>
            </div>
        );

    }

    return (
        <div>

            <h1>Exercício 1</h1>

            <div className="conteudo">

                <form>
                    <p>
                    Digite o número: <input  type="number" value={numero} onChange={ (e) => setNumero(e.target.value)} /> 
                </p>

                <p>
                    <input type="button" value="Calcular" onClick={calcular} />
                </p>

                <p>
                    {resultado}
                </p>
                </form>



                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}