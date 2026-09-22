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
                preco : carroEscolhido,preco,
                opcionais : opcionalEscolhido.opcionais,
                total : Number(dias) * carroEscolhido.preco + opcionalEscolhido.opcionais
            }

            setEscolha([...escolha,novo]);
            setDias(0);
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
                        <select value={carroSelecionado} onChange={(e) => setCarroSelecionado(e.target.value)}>
                        <option value="-1">Selecione uma opção</option>
                        
                        {carros.map(
                            (carro, index) => (
                                <option value={index}>{carro.nome} - R$ {carro.precoDiario.toFixed(2)}</option>
                            )
                        )}
                        </select>
                    </p>
                </form>

                              

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}