import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exemplo2 from "./Exemplo2";

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

    </div>
  );
}