import { Link } from "react-router-dom";

export default function EspiritoSanto() 
{
  return (
    <div>
        <h1>Estado do Espírito Santo</h1>

        <div className="conteudo">

                <img src="/ES.png" />

                <p>
                    O Espírito Santo, no Sudeste, tem capital em Vitória e destaca-se por portos importantes, atividades portuárias e logísticas, indústria de petróleo e gás, mineração e agricultura (café, frutas) e pesca. O estado reúne belezas litorâneas e montanhosas (regiões como Domingos Martins) e uma diversidade cultural marcada pela culinária capixaba (como a moqueca capixaba). Entre os desafios estão a necessidade de diversificar economia regional, fortalecer infraestrutura e enfrentar impactos ambientais ligados à indústria e ao uso do solo.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
    </div>
    </div>
  );
}