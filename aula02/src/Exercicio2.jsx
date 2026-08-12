export default function Exercicio2({peso, altura}) {
    let IMC = Number(peso) / (Number(altura) * Number(altura));

    return (
        <div>
            <p>
                O peso é {peso} e a altura é {altura}, e o IMC é {IMC.toFixed(3)}.
            </p>
        </div>
    );
}