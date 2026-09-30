import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react";

export default function Exercicio1()
{
    const [baseMaior, setBaseMaior] = useState("");
    const [baseMenor, setBaseMenor] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState();

    function calcular(){
        const area = ((Number(baseMaior) + Number(baseMenor)) * Number(altura)) /2;

        setResultado(
            <p>A área do trapézio é {area.toFixed(2)}</p>
        )
    }

    return (
        <div>

            <h1>Exercício 1</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite a base maior (em cm)
                        <input type="number"
                                value={baseMaior}
                                onChange={(e) => setBaseMaior(e.target.value)} />
                    </p>

                    <p>
                        Digite a base menor (em cm)
                        <input type="number"
                                value={baseMenor}
                                onChange={(e) => setBaseMenor(e.target.value)} />
                    </p>

                    <p>
                        Digite a altura (em cm)
                        <input type="number"
                                value={altura}
                                onChange={(e) => setAltura(e.target.value)} />
                    </p>

                    <p>
                        <input type="button"
                                value="Calcular"
                                onClick={calcular} />
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
