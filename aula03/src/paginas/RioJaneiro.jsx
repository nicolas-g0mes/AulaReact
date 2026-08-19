import { Link } from "react-router-dom";

export default function RioJaneiro() 
{
  return (
    <div>
        <h1>Estado do Rio de Janeiro</h1>

        <div className="conteudo">

                <img src="/RJ.png" />

                <p>
                    O estado do Rio de Janeiro, no Sudeste brasileiro, combina litoral extenso, baías e serras (Serra do Mar) com uma economia baseada em turismo, petróleo e gás, indústrias e serviços. A capital, a cidade do Rio de Janeiro, é mundialmente conhecida pelo Carnaval, pelo samba, pelo Pão de Açúcar e pelo Cristo Redentor, atraindo grande fluxo turístico; há também polos portuários e industriais. Enfrenta desafios sociais e urbanos — desigualdade, favelas, violência e infraestrutura — além de questões ambientais como poluição e gestão costeira, que demandam políticas públicas integradas.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
    </div>
  );
}