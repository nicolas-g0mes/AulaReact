import {Link} from "react-router-dom";
import "../App.css";
import { useState } from "react"

export default function Exercicio1()
{
    const [produtos, setProdutos] = useState ([
        {nome : "Cerveja", preco : 12.00, quantidade : 36},
        {nome : "Picanha", preco : 149.00, quantidade : 5}
    ]);

    const [nome, setNome]= useState();
    const [preco, setPreco]= useState();
    const [quantidade, setQtd]= useState();

    function adicionar(){
        const novo = {nome : nome, preco : preco, quantidade : quantidade};
        setProdutos( [...produtos, novo] );

        setNome("");
        setPreco("");
        setQtd("");
    }

    function excluir(index){
        setProdutos( produtos.toSpliced(index, 1) );

    }

    return (
        <div>
            <h1>Exercício 1</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite o nome do produto <br />
                        <input  type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}/>
                    </p>

                    <p>
                        Digite o preço <br />
                        <input  type="number"
                                value={preco}
                                onChange={(e) => setPreco(e.target.value)}/>
                    </p>

                    <p>
                        Digite a quantidade <br />
                        <input  type="number"
                                value={quantidade}
                                onChange={(e) => setQtd(e.target.value)}/>
                    </p>

                    <p>
                        <input type="button"
                                value="Adicionar"
                                onClick={adicionar}
                         />
                    </p>

                    <table>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th></th>
                        </tr>

                        {produtos.map(
                            (produto, index) => (
                                <tr>
                                    <td>{produto.nome}</td>
                                    <td>{produto.quantidade}</td>
                                    <td>R$ {produto.preco}</td>
                                    <td>
                                        <a href="#" onClick={() => excluir(index)}>Excluir</a>
                                    </td>
                                </tr>
                            )
                        )}
                    </table>
                </form>
                              

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}