export default function Exercicio3({nota1, nota2}) {
    let media = (Number(nota1) + Number(nota2)) / 2;
    const situacao = media >= 6 ? "Aprovado" : "Reprovado";

    return (
        <div>
            <p>
                A media das notas é {media} e a situação é {situacao}.
            </p>
        </div>
    );
}