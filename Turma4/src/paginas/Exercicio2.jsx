import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react";

export default function Exercicio2()
{    
    const [sessoes, setSessao] = useState([
        {nome : "Sessão Matinê", preco : 18.00},
        {nome : "Sessão 2D", preco : 28.00},
        {nome : "Sessão 3D", preco : 34.00},
        {nome : "Sessão 2D VIP", preco : 45.00},
        {nome : "Sessão 3D VIP", preco : 52.00}
    ])

    const [tipos, setTipo] = useState ([
        {nome : "Inteira", desconto : 0.00},
        {nome : "Meia-entrada", desconto : (5000/100)},
        {nome : "Promocional", desconto : (3000/100)}
    ])

    const[sessaoSelecionada, setSessaoSelecionada] = useState (-1);
    const[tipoSelecionado, setTipoSelecionado] = useState (-1);
    const[quantidade, setQuantidade] = useState(0);
    const[escolha, setEscolha] = useState([]);
    const[resultado, setResultado] = useState();

    function adicionar() {
        if (sessaoSelecionada >= 0 && tipoSelecionado >= 0) {
            const sessaoEscolhida = sessoes[sessaoSelecionada];
            const tipoEscolhido = tipos[tipoSelecionado];
            const novo = {
                sessao : sessaoEscolhida.nome,
                quantidade : Number(quantidade),
                preco : sessaoEscolhida.preco,
                tipo : tipoEscolhido.nome,
                desconto : tipoEscolhido.desconto,
                total : sessaoEscolhida.preco * Number(quantidade) * (1 - tipoEscolhido.desconto/100)
            };

            setEscolha([...escolha, novo]);
            setQuantidade(0);
            setSessaoSelecionada(-1);
            setTipoSelecionado(-1);
        }
        else if (sessaoSelecionada < 0) {
            alert("Selecione um sessão")
        }
        else {
            alert("Selecione um tipo de ingresso")
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
                        Escolha a sessão <br/>
                        <select value={sessaoSelecionada} onChange={(e) => setSessaoSelecionada(Number(e.target.value))}>
                            <option value="-1">Selecione uma opção</option>

                            {sessoes.map(
                                (sessao, index) => (
                                    <option value={index}>{sessao.nome} - R$ {sessao.preco.toFixed(2)}</option>
                                )
                            )}
                        </select>
                    </p>

                        <p>
                            {sessaoSelecionada >= 0 ? sessoes[sessaoSelecionada].nome : "Nenhuma sessão selecionada !"}
                        </p>

                        <p>
                            Digite a quantidade de ingressos
                            <input type="number"
                                    value={quantidade}
                                    onChange={(e) => setQuantidade(e.target.value)}/>
                        </p>

                        <p>
                            Escolha o tipo do ingresso
                            <select value={tipoSelecionado} onChange={(e) => setTipoSelecionado(Number(e.target.value))}>
                                <option value="-1">Selecione uma opção</option>
                            
                            {tipos.map(
                                (tipo, index) => (
                                    <option value={index}>{tipo.nome} - {tipo.desconto.toFixed(1)}% de desconto</option>
                                )
                            )}
                            </select>
                        </p>

                        <p>
                            Tipo selecionado: {tipoSelecionado >= 0 ? `${tipos[tipoSelecionado].nome} (Desconto: ${tipos[tipoSelecionado].desconto.toFixed(1)}%)` : "Nenhum"}
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
                            <th>Sessão</th>
                            <th>Tipo</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Desconto</th>
                            <th>Total</th>
                            <th></th>
                        </tr>

                        {escolha.map(
                            (escolha,index) => (
                                <tr key={index}>
                                    <td>{escolha.sessao}</td>
                                    <td>{escolha.tipo}</td>
                                    <td>{escolha.quantidade.toFixed(0)}</td>
                                    <td>R$ {escolha.preco.toFixed(2)}</td>                                    
                                    <td>{escolha.desconto}%</td>
                                    <td>R$ {escolha.total.toFixed(2)}</td>
                                    <td>
                                        <a href="#" onClick={() => excluir(index)}>Excluir</a>
                                    </td>
                                </tr>
                            )
                        )}
                    </table>
                ) : "Não há sessões."}

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
