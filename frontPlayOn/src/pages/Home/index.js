import React, { useEffect, useState } from 'react';
import Menu from '../../Components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';
import categoriasRepository from '../../Repositories/categorias'
import PageDefault from "../../Components/PageDefault"

function Home() {

  const [dadosIniciais, setDadosIniciais ] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) =>{

        setDadosIniciais(categoriasComVideos);
      })

      .catch((err) => {
        console.log(err.message);
      })
  }, []);

  return (
    <PageDefault>
      <Menu />
      
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais}

      <BannerMain />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </PageDefault>
  );
}
 export default Home;