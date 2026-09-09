import {Link} from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function Exemplo3()
{
    const [alunos, setAlunos] = useState ([
        {nome : "Gustavo", nota : 8.5},
        {nome : "Felipe", nota : 10.0}
    ]);
    
    const [nome, setNome] = useState();
    const [nota, setNota] = useState();

    function adicionar(){
        
        const novo = {nome : nome, nota : nota};

        setAlunos( [...alunos, novo] );

        setNome("");
        setNota("");

    }

    function excluir(index){
        setAlunos( alunos.toSpliced(index, 1) );
    }

    return (
        <div>
            <h1>Exemplo 3</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite o nome do aluno <br />
                        <input  type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                        />
                    </p>

                    <p>
                        Digite a nota <br />
                        <input type="number"
                                value={nota}
                                onChange={(e) => setNota(e.target.value)}
                        />
                    </p>

                    <p>
                        <input  type="button"
                                value="Adicionar"
                                onClick={adicionar}
                        />
                    </p>
                </form>

                {alunos.length > 0 ? (
                <table>
                    <tr>
                        <th>Nome do Aluno</th>
                        <th>Nota</th>
                        <th></th>
                    </tr>

                    {alunos.map(
                        (aluno, index) => (
                            <tr>
                                <td>{aluno.nome}</td>
                                <td>{aluno.nota}</td>
                                <td>
                                    <a href="#" onClick={() => excluir(index)}>Excluir</a>    
                                </td>
                            </tr>
                        )
                    )}
                </table>
                 ) : "Não há alunos cadastrados"}

                              

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}