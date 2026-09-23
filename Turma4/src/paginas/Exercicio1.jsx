import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react";

export default function Exercicio1()
{
    const [capital, setCapital] = useState("");
    const [taxa, setTaxa] = useState("");
    const [tempo, setTempo] = useState("");
    const [resultado, setResultado] = useState();

    function calcular(){
        const juros = Number(capital) * (Number(taxa)/100) * Number(tempo);
        const montante = Number(capital) + Number(juros);

        setResultado(
            <p>Os juros são R$ {juros.toFixed(2)} e o montante final é R$ {montante.toFixed(2)}</p>
        )
    }

    return (
        <div>

            <h1>Exercício 1</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite o capital (em R$)
                        <input type="number"
                                value={capital}
                                onChange={(e) => setCapital(e.target.value)} />
                    </p>

                    <p>
                        Digite a texa de juros (em % ao mês)
                        <input type="number"
                                value={taxa}
                                onChange={(e) => setTaxa(e.target.value)} />
                    </p>

                    <p>
                        Digite o tempo (em meses)
                        <input type="number"
                                value={tempo}
                                onChange={(e) => setTempo(e.target.value)} />
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
