import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react";

export default function Exercicio2()
{
    const [pizzas, setPizza] = useState ([
        {sabor : "Mussarela", preco : 35.00},
        {sabor : "Calabresa", preco : 38.00},
        {sabor : "Portuguesa", preco : 40.00},
        {sabor : "Frango com Catupiry", preco : 42.00},
        {sabor : "Quatro Queijos", preco : 45.00}
    ])

    const [servicos, setServico] = useState ([
        {tipo : "Retirada", taxa : 0.00},
        {tipo : "Entrega", taxa : 8.00}
    ])

    const [pizzaSelecionada, setPizzaSelecionada] = useState (-1);
    const [servicoSelecionado, setServicoSelecionado] = useState (-1);
    const[quantidade, setQuantidade] = useState(0);
    const[escolha, setEscolha] = useState([]);
    const[resultado, setResultado] = useState();

    function adicionar() {
        const quantidadeNumero = Number(quantidade);

        if (pizzaSelecionada >= 0 && servicoSelecionado >= 0 && quantidadeNumero > 0) {
            const pizzaEscolhida = pizzas[pizzaSelecionada];
            const servicoEscolhido = servicos[servicoSelecionado];
            const novo = {
                pizza : pizzaEscolhida.sabor,
                quantidade : quantidadeNumero,
                preco : pizzaEscolhida.preco,
                servico : servicoEscolhido.tipo,
                taxa : servicoEscolhido.taxa,
                total : (pizzaEscolhida.preco * quantidadeNumero) + servicoEscolhido.taxa
            };

             setEscolha([...escolha, novo]);
            setQuantidade(0);
            setPizzaSelecionada(-1);
            setServicoSelecionado(-1);
        }
        else {
            alert("Selecione um sabor, um tipo de serviço e informe uma quantidade maior que zero!")
        }
    }

    function excluir(index){
        setEscolha( escolha.toSpliced(index,1));
    }

    const totalEscolha = escolha.reduce(
        (soma, escolha) => soma + escolha.total,
        0
    )

    return (
        <div>
            <h1>Exercício 2</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Escolha o sabor da pizza
                        <select value={pizzaSelecionada} onChange={(e) => setPizzaSelecionada(Number(e.target.value))}>
                            <option value="-1">Selecione uma opção</option>

                            {pizzas.map(
                                (pizza, index) => (
                                    <option value={index}>{pizza.sabor} - R$ {pizza.preco.toFixed(2)}</option>
                                )
                            )}
                        </select>
                    </p>

                    <p>
                        {pizzaSelecionada >= 0 ? pizzas[pizzaSelecionada].sabor : "Nenhum sabor selecionado!"}
                    </p>

                    <p>
                        Digite a quantidade
                        <input type="number"
                                min="1"
                                value={quantidade}
                                onChange={(e) => setQuantidade(e.target.value)}/>
                    </p>

                    <p>
                        Escolha o tipo do ingresso
                        <select value={servicoSelecionado} onChange={(e) => setServicoSelecionado(Number(e.target.value))}>
                            <option value="-1">Selecione uma opção</option>
                        
                        {servicos.map(
                            (servico, index) => (
                                <option value={index}>{servico.tipo} - Taxa R$ {servico.taxa.toFixed(1)}</option>
                            )
                        )}
                        </select>
                    </p>

                    <p>
                        Serviço selecionado: {servicoSelecionado >= 0 ? `${servicos[servicoSelecionado].tipo} (Taxa: R$ ${servicos[servicoSelecionado].taxa.toFixed(2)})` : "Nenhum"}
                    </p>

                    <p>
                        <input type="button"
                                value="Adicionar"
                                onClick={adicionar} />
                    </p>
                </form>

                {escolha.length > 0 ? (
                    <table>
                        <tr>
                            <th>Pizza</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Taxa</th>
                            <th>Total</th>
                            <th></th>
                        </tr>

                        {escolha.map(
                            (escolha,index) => (
                                <tr key={index}>
                                    <td>{escolha.pizza}</td>
                                    <td>{escolha.quantidade.toFixed(0)}</td>
                                    <td>R$ {escolha.preco.toFixed(2)}</td>                                    
                                    <td>R$ {escolha.taxa.toFixed(2)}</td>
                                    <td>R$ {escolha.total.toFixed(2)}</td>
                                    <td>
                                        <a href="#" onClick={() => excluir(index)}>Excluir</a>
                                    </td>
                                </tr>
                            )
                        )}
                    </table>
                    ) : "Não há pedidos."}

                    <p>
                        O valor total da venda é R$ {totalEscolha.toFixed(2)}.
                    </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}