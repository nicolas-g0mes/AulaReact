import {Link} from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function Exercicio1()
{   
    const [hospede, setHospede] = useState("");
    const [quartos, setQuartos] = useState([
        {tipo : "Standard", valor : 180.00},
        {tipo : "Luxo", valor : 260.00},
        {tipo : "Família", valor : 320.00},
        {tipo : "Suíte Master", valor : 390.00}
    ])
    const [diaria, setDiaria] = useState (0);
    const [quartoSelecionado, setQuartoSelecionado] = useState (-1);
    const [vendas, setVendas] = useState ([]);
    const [TotalReserva, setTotalReserva] = useState (0);
    const[subTotal, setSubTotal] = useState (0);

    function reservar() {
        const quantidadeDiaria = Number(diaria);
        if (quartoSelecionado >= 0)
        {
            const novo = {
                hospede             : hospede,
                quarto              : quartos[quartoSelecionado].tipo,
                valor               : quartos[quartoSelecionado].valor,
                diaria              : diaria,
                subTotal            : quartos[quartoSelecionado].valor * Number(diaria),
            };

            setVendas( [...vendas, novo]);
            setQuartoSelecionado(-1);
            setDiaria(0);
            setHospede("");

        }
        else {
            alert("Selecione um quarto !")
        }
    }

   function excluir(index)
    {
        setVendas( vendas.toSpliced(index,1) );
    }

    const faturamentoTotal = vendas.reduce(
        (soma, venda) => soma + venda.subTotal,
        0
    );

    return (
        <div>

            <h1>Exercício 1</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite o nome do hóspede
                        <input type="text"
                                onChange={(e) => setHospede(e.target.value)}/>
                    </p>

                    <p>
                        Escolha o tipo de quarto
                        <select 
                        value={quartoSelecionado}
                        onChange={(e) => setQuartoSelecionado(e.target.value)}>
                            <option value="-1">Escolha o tipo de quarto</option>

                            {quartos.map(
                                (quarto, index) => (
                                    <option value={index}>{quarto.tipo} - R$ {quarto.valor.toFixed(2)}</option>
                                )
                            )}
                        </select>
                    </p>

                    <p>
                        Diária do quarto {quartoSelecionado >= 0? quartos[quartoSelecionado].tipo : ""}: R$ {quartoSelecionado >= 0 ? quartos[quartoSelecionado].valor.toFixed(2) : ""}
                    </p>

                    <p>
                        Digite o número de diárias <br />
                        <input type="number" value={diaria} onChange={(e)=>setDiaria(e.target.value)} />
                    </p>
                    
                    <p>
                        <input type="button" value="Reservar" onClick={reservar} />
                    </p>        
                </form>

                {vendas.length > 0 ? (
                    <table>
                        <tr>
                            <th>Hóspede</th>
                            <th>Quarto</th>
                            <th>Diária</th>
                            <th>Diárias</th>
                            <th>Desconto</th>
                            <th>Total</th>
                            <th></th>
                        </tr>

                        {vendas.map(
                            (venda, index) => (
                                <tr>
                                    <td>{venda.hospede}</td>
                                    <td>{venda.quarto}</td>
                                    <td>R$ {venda.valor}</td>
                                    <td>{venda.diaria}</td>
                                    <td>R$ {venda.desconto}</td>
                                    <td>R$ {venda.subTotal}</td>
                                    <td>
                                        <a href="#" onClick={() => excluir(index)}>Excluir</a>
                                    </td>
                                </tr>
                            )
                        )}
                    </table>
                ) : "Não há registro de reservas de quarto !"}

                <p>
                    Faturamento total: R$ {faturamentoTotal}. 
                </p>
  
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
