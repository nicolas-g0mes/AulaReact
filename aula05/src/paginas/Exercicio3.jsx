import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react";

export default function Exercicio3()
{

    const [carros, setCarro] = useState([
        {nome : "Sedan", precoDiario : 150.00},
        {nome : "SUV", precoDiario : 200.00},
        {nome : "Econômico", precoDiario : 100.00},
        {nome : "Conversível", precoDiario : 300.00},
        {nome : "Picape", precoDiario : 250.00},
        {nome : "Esportivo", precoDiario : 400.00}
    ]);

    const [opcionais, setOpcionais] = useState ([
        {nome : "Nenhum", preco : 0.00},
        {nome : "GPS", preco : 15.00},
        {nome : "Seguro", preco : 50.00},
        {nome : "Cadeira para Criança", preco : 20.00},
        {nome : "Motorista", preco : 100.00},
        {nome : "GPS + Seguro", preco : 60.00},
        {nome : "Motorista + Seguro", preco : 140.00}
    ]);

    const[carroSelecionado, setCarroSelecionado] = useState(-1);
    const[opcionalSelecionado, setOpcionalSelecionado] = useState(-1);
    const[dias, setDias] = useState(0);
    const[escolha, setEscolha] = useState([]);

    function adicionar() {
        if (carroSelecionado >= 0 && opcionalSelecionado >= 0){
            const carroEscolhido = carros[carroSelecionado];
            const opcionalEscolhido = opcionais[opcionalSelecionado];
            const novo = {
                carro : carroEscolhido.nome,
                dias : Number(dias),
                precoDiario : carroEscolhido.precoDiario,
                opcionais : opcionalEscolhido.nome,
                precoOpcional : opcionalEscolhido.preco,
                total : Number(dias) * carroEscolhido.precoDiario + opcionalEscolhido.preco
            };

            setEscolha([...escolha, novo]);
            setDias(0);
            setCarroSelecionado(-1);
            setOpcionalSelecionado(-1);
        }
        else if (carroSelecionado < 0) {
            alert("Selecione um carro")
        }
        else {
            alert("Selecione um opcional")
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
            <h1>Exercício 3</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Escolha o carro <br />
                        <select value={carroSelecionado} onChange={(e) => setCarroSelecionado(Number(e.target.value))}>
                        <option value="-1">Selecione uma opção</option>
                        
                        {carros.map(
                            (carro, index) => (
                                <option value={index}>{carro.nome} - R$ {carro.precoDiario.toFixed(2)}</option>
                            )
                        )}
                        </select>
                    </p>

                    <p>
                        {carroSelecionado >= 0 ? carros[carroSelecionado].nome : "Nenhum carro selecionado !"}
                    </p>

                    <p>
                        Digite o numero de dias
                        <input type="number"
                               value={dias}
                               onChange={(e) => setDias(e.target.value)} />
                    </p>
                    <p>
                        Escolha o opcional
                    <select value={opcionalSelecionado} onChange={(e) => setOpcionalSelecionado(Number(e.target.value))}>
                        <option value="-1">Selecione uma opção</option>

                        {opcionais.map(
                            (opcionais, index) => (
                                <option value={index}>{opcionais.nome} - R$ {opcionais.preco.toFixed(2)}</option>
                            )
                        )}
                    </select>
                    </p>

                    <p>
                        Opcional selecionado: {opcionalSelecionado >= 0 ? `${opcionais[opcionalSelecionado].nome} - R$ ${opcionais[opcionalSelecionado].preco.toFixed(2)}` : "Nenhum"}
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
                            <th>Carro</th>
                            <th>Dias</th>
                            <th>Preço Diário</th>
                            <th>Opcional</th>
                            <th>Preço Opcional</th>
                            <th>Total</th>
                            <th></th>                            
                        </tr>

                    {escolha.map(

                        (escolha, index) => (
                            <tr key={index}>
                                <td>{escolha.carro}</td>
                                <td>{escolha.dias}</td>
                                <td>R$ {escolha.precoDiario.toFixed(2)}</td>
                                <td>{escolha.opcionais}</td>
                                <td>R$ {escolha.precoOpcional.toFixed(2)}</td>
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
                    O valor total dos pedidos é R$ {totalEscolha.toFixed(2)}.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}