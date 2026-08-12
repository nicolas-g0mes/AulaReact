export default function Exemplo2({nome, idade})
{
    let dias = Number(idade) * 365;
    return (
        <div>
            <p>
                Olá {nome} sua idade é {idade} anos e você já viveu {dias} dias.
            </p>
        </div>
    );
}