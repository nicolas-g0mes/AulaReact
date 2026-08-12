export default function Exemplo1({numero1, numero2})
{
    let soma = Number(numero1) + Number(numero2);
    return (
        <div>
            <p>
                Número 1: {numero1} <br />
                Número 2: {numero2} <br />
                A soma é: {soma}
            </p>
        </div>
    );
}