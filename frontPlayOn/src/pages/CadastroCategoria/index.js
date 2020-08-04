import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button'
import PageDefault from '../../Components/PageDefault';
import FormField from '../../Components/FormField/index';


function CadastroCategoria() {
  const valoresIniciais = {

    nome: '',
    descricao: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infoEvent) {
    const { getAttribute, value } = infoEvent.target;
    const getAttributeComThis = getAttribute.bind(infoEvent.target);

    setValue(
      getAttributeComThis('name'),
      value,
    );
  }
  
  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias'; 
      fetch(URL)
       .then( async(respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }

        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);

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

          setValues(valoresIniciais);
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
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria}
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
