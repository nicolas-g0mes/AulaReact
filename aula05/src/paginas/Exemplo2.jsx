import {Link} from "react-router-dom";
import "../App.css";
import { useState } from "react"

export default function Exemplo3()
{
    const [alunos, setAlunos]= useState(["Gustavo", "Felipe"]);
    const [nome, setNome]= useState();

    function adicionar(){
        //adicionando o "nome" ao vetor "alunos"
        setAlunos( [...alunos, nome] );

        //limpando a variável de estado "nome"
        setNome("");
    }

    function excluir(index){
        setAlunos( alunos.toSpliced(index, 1) );
    }
    return (
        <div>
            <h1>Exemplo 2</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite o nome do aluno <br />
                        <input  type="text"
                                value={nome}
                                onChange={(e) => setNome (e.target.value)} />
                    </p>

                    <p>
                        <input  type="button"
                                value="Adicionar"
                                onClick={adicionar} />
                    </p>

                </form>

                <h3>Lista de Alunos</h3>

                <ul>
                    {alunos.map(
                        (aluno, index) => ( 
                        <li>
                            Aluno: {aluno} 
                            <a href="#" onClick={ () => excluir(index) }> Excluir</a>
                        </li>
                        
                    )
                    )}
                </ul>

                              

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}