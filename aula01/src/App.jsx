export default function App() 
{
  let nome, idade, altura;

  nome = "Nicolas";
  idade = 20;
  altura = 1.70;
  return (
    <div>
      <h1>Hello, World!</h1>

      <p style={ {color: 'red'} }>
        Olá, seja bem vindo ao React com JavaScript
      </p>

      <p>
        Olá <b>{nome}</b> seja bem vindo ao React.
      </p>

      <p>
        Sua idade é <span style={ {color: 'blue'} }>{idade} anos</span>, e sua altura é <span style={ {color: 'green'} }>{altura}</span> metros.
      </p>

      <p>
        Você já viveu {idade * 365} dias.
      </p>
    </div>
  );
}