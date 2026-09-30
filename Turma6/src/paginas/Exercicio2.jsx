import {Link} from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function Exercicio2()
{    
    const[sessoes, setSessoes] = useState([
        {nome : "Sessão Matinê" , preco : 18.00},
        {nome : "Sessão 2D"     , preco : 28.00},
        {nome : "Sessão 3D"     , preco : 34.00},
        {nome : "Sessão 2D Vip" , preco : 45.00},
        {nome : "Sessão 3D Vip" , preco : 52.00},        
    ]);

    const[tipos, setTipos] = useState([
        {tipo : "Inteira"       , desconto : 0},
        {tipo : "Meia Entrada"  , desconto : 50},
        {tipo : "Promocional"   , desconto : 30},
    ]);

    const[sessaoSelecionada, setSessaoSelecionada] = useState(-1);
    const[quantidade, setQuantidade] = useState(0);
    const[tipoIngressoSelecionado, setTipoIngressoSelecionado] = useState(0);

    const[vendas, setVendas] = useState([]);

    function adicionar()
    {
        if ( sessaoSelecionada >= 0 )
        {
            const novo = {
                sessao      : sessoes[sessaoSelecionada].nome,
                tipo        : tipos[tipoIngressoSelecionado].tipo,
                quantidade  : quantidade,
                preco       : sessoes[sessaoSelecionada].preco,
                desconto    : tipos[tipoIngressoSelecionado].desconto + "%",
                total       : sessoes[sessaoSelecionada].preco * quantidade * ( 1 - tipos[tipoIngressoSelecionado].desconto/100 ),
            };

            setVendas( [...vendas, novo]);

            setSessaoSelecionada(-1);
            setQuantidade(0);
            setTipoIngressoSelecionado(0);
        }
        else
        {
            alert("Selecione uma sessão !")
        }
    }

    function excluir(index)
    {
        setVendas( vendas.toSpliced(index,1) );
    }

    //variavel reduce para calcular
    const totalVendas = vendas.reduce(
        (soma, venda) => soma + venda.total,
        0
    );

    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Escolha a sessão <br />
                        <select 
                         value={sessaoSelecionada} 
                         onChange={(e)=>setSessaoSelecionada(e.target.value)}>
                            <option value="-1">Escolha a sessão</option>

                            {sessoes.map(
                                (sessao, index) => (
                                    <option value={index}>{sessao.nome} - R$ {sessao.preco.toFixed(2)}</option>
                                )
                            )}
                        </select>
                    </p>

                    <p>
                        {sessaoSelecionada >= 0 ? sessoes[sessaoSelecionada].nome : "não seleção"}
                    </p>

                    <p>
                        Digite a quantidade de ingressos <br />
                        <input type="text" value={quantidade} onChange={(e)=>setQuantidade(e.target.value)} />
                    </p>

                    <p>
                        Escolha o tipo de ingresso <br />
                        <select 
                         value={tipoIngressoSelecionado} 
                         onChange={(e)=>setTipoIngressoSelecionado(e.target.value)}>
                            {tipos.map(
                                (tipo, index) => (
                                    <option value={index}>{tipo.tipo} - {tipo.desconto.toFixed(2)}% de desconto</option>
                                )
                            )}
                        </select>
                    </p>

                    <p>
                        <input type="button" value="Adicionar" onClick={adicionar} />
                    </p>

                </form>

                {vendas.length > 0 ? (
                    <table>
                        <tr>
                            <th>Sessão</th>
                            <th>Tipo</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Desconto</th>
                            <th>Total</th>
                            <th></th>
                        </tr>

                        {vendas.map(
                            (venda, index) => (
                                <tr>
                                    <td>{venda.sessao}</td>
                                    <td>{venda.tipo}</td>
                                    <td>{venda.quantidade}</td>
                                    <td>{venda.preco.toFixed(2)}</td>
                                    <td>{venda.desconto}</td>
                                    <td>{venda.total.toFixed(2)}</td>
                                    <td>
                                        <a href="#" onClick={() => excluir(index)}>Excluir</a>
                                    </td>
                                </tr>
                            )
                        )}
                    </table>
                ) : "Não há registro de vendas de ingresso !"}

                <p>
                    O valor total da venda é R$ {totalVendas.toFixed(2)}. 
                </p>
  
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
