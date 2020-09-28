import './App.css';
import React from 'react';

import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

function App() {
  return (
    <div className="App">

      <h1>Fundamentos React</h1>

      <div className="Cards">

        <Card titulo="Tabela de Produtos" color="#3A9AD9">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="Repetição" color="#FF4C65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Ana"/>
            <FamiliaMembro nome="Gustavo"/>            
          </Familia>
        </Card>

        <Card titulo="Desafio Aleatório" color="#FA6900">
          <Aleatorio min={1} max={60}></Aleatorio>
        </Card>

        <Card titulo="Com Parêmetro" color="#E94C6F">
          <ComParametro titulo="Segundo Componente" subtitulo="Muito bom!" />
        </Card>

        <Card titulo="Primeiro Componente" color="#588C73">
          <Primeiro></Primeiro>
        </Card>

      </div>

    </div>
  );
}

export default App;
