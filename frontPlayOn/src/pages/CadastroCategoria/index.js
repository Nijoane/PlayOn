import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../Components/PageDefault';

function CadastroCategoria() {
  const [nomeDaCategoria, setNomedaCategoria] = useState('Filmes');

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: { nomeDaCategoria } </h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )  
}

export default CadastroCategoria;