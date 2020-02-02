import React from 'react';
import './styles.css'

import Moment from 'moment';

function formatDate(data) {
    Moment.locale('pt-BR');
    return Moment(data).format('DD-MM-Y');
}

// function formatHour(hora) {
//     var d = new Date(hora);
//     var t = d.toLocaleTimeString('pt-BR', {
//         hour12: false
//     });
//     // document.body.innerHTML = t
//     return t;
// }

function EscalaItem({escala}) {
    return (
        <li className="escala-item">
            <header>
                {/*<img src={escala.avatar_url} alt={escala.name}/>*/}
                <div className='data-info'>
                    <h1>{formatDate(escala.dia)}</h1>
                    <h2>{escala.local}</h2>
                    <strong>{escala.horario}</strong>
                    <span>{escala.ministros.join(', ')}</span>

                </div>
            </header>
            {/*<p>{escala.bio}</p>*/}
            {/*<a href={`https://github.com/${escala.github_username}`}>Acessar Perfil no github</a>*/}
        </li>
    );
}

export default EscalaItem;