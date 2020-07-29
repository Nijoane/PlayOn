import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/index';
import Cartoon from './assets/croods.png';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from './pages/CadastroVideo';
import CadastroCategoria from './pages/CadastroCategoria';

const Pagina404 = () => (
  <div className='PageNotFound'>
    <h1>Ops... parece que essa página não existe.</h1>
    <img className="Cartoon" src={ Cartoon } alt="404 not found"/>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/cadastro/video' component={CadastroVideo} exact />
        <Route path='/cadastro/categoria' component={CadastroCategoria} exact />
        <Route component={Pagina404} />

      </Switch>
  </BrowserRouter>, 
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
