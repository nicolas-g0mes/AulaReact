import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio6()
{
    const [quantidade, setQtd]= useState ();
    const [preco, setPreco]= useState ();
    const [resultado, setResultado]= useState();

    function calcular() {
        let subTotal = Number(quantidade) * Number(preco);
        let desconto = subTotal * Number(0.10);
        let valorFinal = subTotal - desconto;


        setResultado (
            <p>
                O subtotal é: {subTotal} <br />
                O desconto de 10% é: {desconto}<br />
                O valor final a pagar é: {valorFinal}<br />
            </p>
        )
    }


    return (
        <div>

            <h1>Exercício 6</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite a quantidade do produto <input type="number" value={quantidade} onChange={(e) => setQtd(e.target.value)} />
                    </p>

                    <p>
                        Digite o preço do produto <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
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