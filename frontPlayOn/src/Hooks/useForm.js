import { useState } from 'react';

function useForm(valoresIniciais) {
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
  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
