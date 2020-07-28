import React from 'react';
import Logo from '../../assets/logo.png';
import '../Menu/home.css';
import Button from '../ButtonLink';

function Menu(){
    return(
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='PlayOn Logo'/>
            </a>

            <Button as='a' className='ButtonLink' href='/'>
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;