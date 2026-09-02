import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio4()
{
    const [valorBase, setBase] = useState();
    const [valorAltura, setAltura] = useState();
    const [resultado, setResultado] = useState();
    
    function calcular (){
        let area = (Number(valorBase) * Number(valorAltura)) /2;

        setResultado (
        <p>A área do triangulo é: {area}</p> 
    )
    }


    return (
        <div>

            <h1>Exercício 4</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite o valor da base do triangulo <input type="number" value={valorBase} onChange={ (e) => setBase(e.target.value)} />
                    </p>

                    <p>
                        Digite o valor da altura do triangulo <input type="number" value={valorAltura} onChange={ (e) => setAltura(e.target.value)} />
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