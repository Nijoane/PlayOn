import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Button from '../ButtonLink/index';
import '../Menu/index.css';

function Menu(){
    return(
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={ Logo } alt='PlayOn Logo'/>
            </Link>

            <Button as={Link} to='/cadastro/video' className='ButtonLink' >
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;