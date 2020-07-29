import React from 'react';
import BackgroundImage from '../../assets/background.png';
import './index.css';

function BannerMain() {
  return(
    <div className='Banner'>
      <div className='TextBanner'>
        <h1>
          Crie suas playlist de vídeos exclusivas!
        </h1>
        <p>Com o PlayOn você consegue salvar seus vídeos prediletos e ainda separá-los por categorias</p>
      </div>

        <img className='BackgroundImage' src={ BackgroundImage } alt='PlayOn background banner'/>
     </div>
    )
}
export default BannerMain;
