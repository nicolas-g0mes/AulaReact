import { Link } from "react-router-dom";

export default function MinasGerais() 
{
  return (
    <div>
        <h1>Estado de Minas Gerais</h1>

        <div className="conteudo">

                <img src="/MG.png" />

                <p>
                    Minas Gerais, no Sudeste do Brasil, é o segundo estado mais populoso
                    e um dos maiores em extensão territorial. A capital é Belo Horizonte,
                    e o estado destaca-se pela diversidade
                    geográfica — serras (Serra do Espinhaço), vales e planaltos — e por sua economia
                    histórica e contemporânea baseada em mineração (ferro, ouro, outros minerais),
                    agropecuária (café, leite, pecuária) e um parque industrial e de serviços significativo.
                    Cidades importantes incluem Uberlândia, Juiz de Fora, Montes Claros e as históricas
                    Ouro Preto e Tiradentes; há também centros culturais e científicos como Inhotim e a UFMG.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
    </div>
  );
}