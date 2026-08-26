import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio2()
{
    const[fahrenheit, setFah] = useState();
    const[resultado, setResultado] = useState();

    function calcular (){
        let celsius = Number(fahrenheit - 32) *5 /9;

        setResultado(
            <p>A temperatura em Celsius é: {celsius.toFixed(2)}</p>
        )
    }

    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">

            <form>
                <p>
                    Digite a temperatura em fahrenheit:<input type="text" value={fahrenheit} onChange={ (e) => setFah(e.target.value)} />
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