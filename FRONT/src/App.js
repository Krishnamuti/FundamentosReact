import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

function App() {
  return (
    <div className="App">

      <h1>Fundamentos React</h1>

      <div className="Cards">
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
