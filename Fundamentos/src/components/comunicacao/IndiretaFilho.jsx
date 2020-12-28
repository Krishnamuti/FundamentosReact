import React from 'react';

export default props => {
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50;    
    return(
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.quandoClicar('João', gerarIdade(), true);
                }
            }>Fornecer Informações</button>
        </div>        
    );
};

