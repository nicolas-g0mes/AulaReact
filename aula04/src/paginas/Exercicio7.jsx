import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio7()
{
    const [nota1, setN1]= useState();
    const [nota2, setN2]= useState();
    const [nota3, setN3]= useState();
    const [resultado, setResultado]= useState();

    function calcular (){
        let media = (Number(nota1) + Number(nota2) + Number(nota3)) /3;

        setResultado (
            <p>
                A média aritmética é: {media}
            </p>
        )
    }

    return (
        <div>

            <h1>Exercício 7</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite a 1ª nota <input type="number" value={nota1} onChange={(e) => setN1(e.target.value)} />
                    </p>

                    <p>
                        Digite a 2ª nota <input type="number" value={nota2} onChange={(e) => setN2(e.target.value)} />
                    </p>

                    <p>
                        Digite a 3ª nota <input type="number" value={nota3} onChange={(e) => setN3(e.target.value)} />
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