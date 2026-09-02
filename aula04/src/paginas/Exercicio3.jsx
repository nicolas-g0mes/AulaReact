import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio3()
{
    const [valor, setValor] = useState();
    const [taxa, setTaxa] = useState();
    const [tempo, setTempo] = useState();
    const [resultado, setResultado] = useState();

    function calcular (){
        let valorParcela = Number(valor) + (Number(valor) * (Number(taxa **2)/100) * Number(tempo))

        setResultado(
            <p>O valor da parcela é: {valorParcela}</p>
        )
    }

    return (
        <div>

            <h1>Exercício 3</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite o valor da prestação <input type="number" value={valor} onChange={ (e) => setValor(e.target.value)} />
                    </p>

                    <p>
                        Digite a taxa de juros (%) <input type="number" value={taxa} onChange={ (e) => setTaxa(e.target.value)} />
                    </p>

                    <p>
                        Digite o tempo de dias de atraso <input type="number" value={tempo} onChange={ (e) => setTempo(e.target.value)} />
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