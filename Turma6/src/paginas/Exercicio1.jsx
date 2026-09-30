import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react";

export default function Exercicio1()
{    

    const[capital, setCapital] = useState();
    const[tempo, setTempo] = useState();
    const[taxa, setTaxa] = useState();
    const[resposta, setResposta] = useState();

    function calcular()
    {
        let juros, montante;

        juros = capital * ( taxa / 100) * tempo;
        montante = Number(capital) + juros;

        setResposta(
            <div>
                Os juros são R$ {juros.toFixed(2)} e o montante final é R$ {montante.toFixed(2)}
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 1</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite o valor do Capital <br />
                        <input type="number"
                         value={capital}
                          onChange={ (e) => setCapital(e.target.value)} />
                    </p>

                    <p>
                        Digite a taxa de juros (%) <br />
                        <input type="number"
                         value={taxa}
                          onChange={ (e) => setTaxa(e.target.value)} />
                    </p>

                    <p>
                        Digite o tempo em meses <br />
                        <input type="number"
                         value={tempo}
                          onChange={ (e) => setTempo(e.target.value)} />
                    </p>

                    <p>
                        <input type="button" value="Calcular" onClick={calcular} />
                    </p>

                    <p>
                        {resposta}
                    </p>

                </form>

  
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
