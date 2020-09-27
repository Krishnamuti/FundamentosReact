import React from 'react';

export default function Aleatorio(props){    
    const {min,max} = props;

    const numAleatorio = parseInt(Math.random() * (max - min)) + min;    
    return(
        <div>
            <h2>Número aleatório entre {min} e {max}: {numAleatorio}</h2>            
        </div>
    );
}