import { Link } from "react-router-dom";

export default function SaoPaulo() {
    return (
        <div>
            <h1>Estado de São Paulo</h1>

            <div className="conteudo">

                <img src="/SP.png" />

                <p>
                    O estado de São Paulo, localizado na região Sudeste do Brasil,
                     é o mais populoso e o principal centro econômico do país. Sua capital,
                     a cidade de São Paulo, concentra grande parte das atividades financeiras,
                     industriais e de serviços, mas o estado também possui polos importantes em Campinas,
                     Santos, Ribeirão Preto, São José dos Campos e outras cidades.
                     A economia é diversificada — indústria (automobilística, metalúrgica, química),
                     agronegócio (cana, laranja, café em algumas regiões), comércio e tecnologia — e responde
                     por uma parcela significativa do PIB brasileiro, além de abrigar portos e rodovias
                     estratégicas para o comércio nacional e internacional.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}