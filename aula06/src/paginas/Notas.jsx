import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "./supabase";

export default function Notas()
{
      const {codigo} = useParams();

  return (
    <div>
        <h1>Cadastro de Novos Alunos</h1>  

        <div className="conteudo">

            <p>
            <Link to="/">Voltar</Link>
          </p>
        </div>
    </div>
  )
}