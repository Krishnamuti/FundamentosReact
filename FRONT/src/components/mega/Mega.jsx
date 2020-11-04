import './Mega.css';
import React, { useState } from 'react';

export default (props) => {

    function geraNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + max;
        return array.includes(aleatorio) ?
            geraNumeroNaoContido(min, max, array) :
            aleatorio;
    }

    function geraNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((arrayNums) => {
                const novoNumero = geraNumeroNaoContido(1, 60, arrayNums);
                return [...arrayNums, novoNumero];
            }, [])
            .sort((n1, n2) => n1 - n2);
        return numeros;
    }

    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = geraNumeros(qtde);
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' - ')}</h3>
            <div>
                <label>Qtde de Números</label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value);
                        setNumeros(geraNumeros(qtde));
                    }} />
            </div>
            <button onClick={_ => setNumeros(geraNumeros(qtde))}>Gerar Números</button>
        </div>
    );
};

