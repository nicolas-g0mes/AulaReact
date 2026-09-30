import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react";

export default function Exercicio2()
{
    const [pizzas, setPizzas] = useState([
        {nome : "Mussarela", preco : 35.00},
        {nome : "Calabresa", preco : 38.00},
        {nome : "Portuguesa", preco : 40.00},
        {nome : "Frango com Catupiry", preco : 42.00},
        {nome : "Quatro Queijos", preco : 45.00}
    ]);

    const [tipos, setServico] = useState([
            {tipo : "Retirada", taxa : 0.00},
            {tipo : "Entrega", taxa : 8.00}
        ]);

    const[pizzaSelecionada, setPizzaSelecionada] = useState(-1);
    const[servicoSelcionado, setServicoSelecionado] = useState(-1);
    const[quantidade, setQuantidade] = useState(0);
    const[pedido, setPedido] = useState([]);

    function adicionar(){
        if (pizzaSelecionada >= 0 && servicoSelecionado >= 0) {
            const pizzaEscolhida = pizzas[pizzaSelecionada];
            const servicoEscolhido = tipos[servicoSelcionado];
            const quantidadeNumero = Number(quantidade);

            const novo = {
                pizza : pizzaEscolhida.nome,
                quantidade : quantidadeNumero,
                tipo: servicoEscolhido.tipo,
                preco : pizzaEscolhida.preco,
                taxa : servicoEscolhido.taxa,
                total : (quantidadeNumero * pizzaEscolhida.preco) + servicoEscolhido.taxa
            }

            setPedido([...pedido, novo]);

            setPizzaSelecionada(-1);
            setQuantidade(0);
            setServicoSelecionado(-1);
        }
        else {
            alert("Selecione uma pizza e um tipo de entrega!")
        }
    }

    function excluir(index) {
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
                        Escolha a sua pizza <br />
                        <select value={pizzaSelecionada} onChange={(e) => setPizzaSelecionada(Number(e.target.value))}>
                        <option value="-1">Selecione uma opção</option>
                        
                        {pizzas.map(

                            (pizza, index) => (
                                <option value={index}>{pizza.nome} - R$ {pizza.preco.toFixed(2)}</option>
                            )
                        )}
                        </select>
                    </p>

                    <p>
                        {pizzaSelecionada >= 0 ? pizzas[pizzaSelecionada].nome : "Não pizza selecionada !"}
                    </p>

                    <p>
                        Digite a quantidade pizzas <br />
                        <input type="number"
                               value={quantidade}
                               onChange={(e) => setQuantidade(e.target.value)} />
                    </p>

                    <p>
                        Escolha o tipo de entrega <br />
                        <select value={servicoSelcionado} onChange={(e) => setServicoSelecionado(Number(e.target.value))}>
                        <option value="-1">Selecione uma opção</option>
                        
                        {tipos.map(

                            (tipo, index) => (
                                <option value={index}>{tipo.tipo} - R$ {tipo.taxa.toFixed(2)}</option>
                            )
                        )}
                        </select>
                    </p>

                    <p>
                        Entrega selecionada : {servicoSelcionado >= 0 ? tipos[servicoSelcionado].tipo : "Nenhum"}
                    </p>

                    <p>
                        <input type="button"
                               value="Adicionar"
                               onClick={adicionar} />
                    </p>
                </form>

                {pedido.length > 0 ? (

                    <table>
                        <tr>
                            <th>Pizza</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Taxa</th>
                            <th>Total</th>
                            <th></th>
                        </tr>

                    {pedido.map(

                        (pedido, index) => (
                            <tr key={index}>
                                <td>{pedido.pizza}</td>
                                <td>{pedido.quantidade}</td>
                                <td>R$ {pedido.preco.toFixed(2)}</td>
                                <td>R$ {pedido.taxa.toFixed(2)}</td>
                                <td>R$ {pedido.total.toFixed(2)}</td>
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