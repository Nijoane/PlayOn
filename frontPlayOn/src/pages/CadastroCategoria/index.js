import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import PageDefault from '../../Components/PageDefault';
import FormField from '../../Components/FormField/index';
import useForm from '../../Hooks/useForm';


function CadastroCategoria() {
  const valoresIniciais = {

    nome: '',
    descricao: '',
  };

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias([
              ...resposta,
            ]);
          }
        });
    }
  }, []);

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infoEvent) {
          infoEvent.preventDefault();

          setCategorias([
            ...categorias,
            values.nome,
          ]);

          clearForm();
        }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map(categoria => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
