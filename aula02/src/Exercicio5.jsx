export default function Exercicio5 ({quantidade}) {
    let salarioBruto = Number(quantidade) * 150;
    let desc = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - desc;

    return (
        <P>Quantidade: {quantidade}
        <br />
        Salário Bruto: {salarioBruto}
        <br />
        Desconto: R$ {desc}
        <br />
        Salário Líquido: R$ {salarioLiquido}
        </P>
    )
}
