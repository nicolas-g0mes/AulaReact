import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exemplo2 from "./Exemplo2";
import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";

export default function App()
{
  return (
    <div>
      <h1>Aula 02 - Estudo de Componentes e Props</h1>

      <div className="card">
        <h3>Chamadas para o componente Exemplo1</h3>

        <Exemplo1 numero1={10} numero2={20} />
        <hr />
        <Exemplo1 numero1={11} numero2={5} />
        <hr />
        <Exemplo1 numero1={9.5} numero2={-3} />
      </div>

      <div className="card">
        <h3>Chamadas para o componente Exemplo2</h3>

        <Exemplo2 nome="Nicolas" idade={20} />
      </div>

      <div className="card">
        <h3>Chamadas para o componente Exercicio1</h3>

        <Exercicio1 fahrenheit={100}/>
        <hr />
        <Exercicio1 fahrenheit={70}/>                
      </div>
      
      <div className="card">
        <h3>Chamadas para o componente Exercicio2</h3>

        <Exercicio2 peso={80} altura={1.80} />
        <hr />
        <Exercicio2 peso={60} altura={1.60} />       
      </div>

      <div className="card">
        <h3>Chamadas para o componente Exercicio3</h3>

        <Exercicio3 nota1={7.5} nota2={9.5} />
        <Exercicio3 nota1={3} nota2={6.5} />       
      </div>

    </div>
  );
}