import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react";

export default function Exercicio2()
{

    const [hamburgueres, setHamburguer] = useState([
        {nome : "Cheeseburguer", preco : 25.00},
        {nome : "Bacon Burguer", preco : 30.00},
        {nome : "Veggie Burguer", preco : 28.00},
    ]);

    const [tipoServico, setServico] = useState([
        {tipo : "Retirada", taxa : 0.00},
        {tipo : "Entrega", taxa : 10.00}
    ]);

    const[hamburguerSelecionado, setHamburguerSelecionado] = useState(-1);
    const[tipoServicoSelecionado, setTipoServicoSelecionado] = useState(-1);
    const[quantidade, setQuantidade] = useState(0);
    const[pedido, setPedido] = useState([]);

    function adicionar() {
        if (hamburguerSelecionado >= 0 && tipoServicoSelecionado >= 0){
            const hamburguerEscolhido = hamburgueres[hamburguerSelecionado];
            const servicoEscolhido = tipoServico[tipoServicoSelecionado];
            const novo = {
                hamburguer : hamburguerEscolhido.nome,
                quantidade : Number(quantidade),
                preco : hamburguerEscolhido.preco,
                taxa : servicoEscolhido.taxa,
                total : Number(quantidade) * hamburguerEscolhido.preco + servicoEscolhido.taxa
            }

            setPedido([...pedido,novo]);
            setQuantidade(0);
            setTipoServicoSelecionado(-1);
        }
        else if (hamburguerSelecionado < 0) {
            alert("Selecione um hambúrguer")
        }
        else {
            alert("Selecione um tipo de serviço")
        }
    }

    function excluir(index){
        setPedido( pedido.toSpliced(index,1));
    }

    const totalPedidos = pedido.reduce(
        (soma, pedido) => soma + pedido.total,
        0
    )

    return (
        <div>
            <h1>Exercício 2</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Escolha seu hambúrguer <br />
                        <select value={hamburguerSelecionado} onChange={(e) => setHamburguerSelecionado(Number(e.target.value))}>
                        <option value="-1">Selecione uma opção</option> 
                        
                        {hamburgueres.map(
                            (hamburguer, index) => (
                                <option key={index} value={index}>{hamburguer.nome} - R$ {hamburguer.preco.toFixed(2)}</option>
                            )
                        )}
                        
                        </select>
                        </p>
                        
                    <p>
                        {hamburguerSelecionado >= 0 ? hamburgueres[hamburguerSelecionado].nome : "Nenhum hambúrguer selecionado !"}
                    </p>

                    <p>
                        Digite a quantidade <br />
                        <input  type="number"
                                value={quantidade}
                                onChange={(e) => setQuantidade(Number(e.target.value))}/>
                    </p>

                    <p>
                        Escolha o tipo do serviço <br />
                        <select value={tipoServicoSelecionado} onChange={(e) => setTipoServicoSelecionado(Number(e.target.value))}>
                            <option value="-1">Selecione uma opção</option>
                            {tipoServico.map(
                                (servico, index) => (
                                    <option key={index} value={index}>{servico.tipo} - R$ {servico.taxa.toFixed(2)}</option>
                                )
                            )}
                        </select>
                        <p>
                            Serviço selecionado: {tipoServicoSelecionado >= 0 ? `${tipoServico[tipoServicoSelecionado].tipo} - R$ ${tipoServico[tipoServicoSelecionado].taxa.toFixed(2)}` : "Nenhum serviço selecionado"}
                        </p>
                    </p>

                    <p>
                        <input  type="button"
                                value="Adicionar"
                                onClick={adicionar}/>
                    </p>
                </form>

                {pedido.length > 0 ? (
                    <table>
                        <tr>
                            <th>Hambúrguer</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Taxa</th>
                            <th>Total</th>
                            <th></th>                        
                        </tr>
                        {pedido.map(

                        (pedido, index) => (
                            <tr>
                                <td>{pedido.hamburguer}</td>
                                <td>{pedido.quantidade}</td>
                                <td>R$ {pedido.preco}</td>
                                <td>R$ {pedido.taxa}</td>
                                <td>R$ {pedido.total}</td>
                                <td>
                                    <a href="#" onClick={() => excluir(index)}>Excluir</a>
                                </td>
                            </tr>
                        )
                    )}
                    </table>
                ) : "Não há pedidos."}

                <p>
                    O valor total dos pedidos é R$ {totalPedidos.toFixed(2)}.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}