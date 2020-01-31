import React, {useEffect, useState} from 'react';
import api from './services/Api'
import EscalaItem from "./components/EscalaItem";
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
    // const config = {
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //     }
    // };
    const [escalas, setEscalas] = useState([]);
    useEffect(() => {
        async function loadEscalas() {
            const response = await api.get('/escala');
            setEscalas(response.data);
        }
        loadEscalas();
    }, []);

    // async function handleAddEscala(data) {
    //     const response = await api.post('/escala', {data});
    //     setEscalas([...escalas, response.data]);
    // }

    return (
        <div id="app">
            <aside>
                <strong>Escala Ministerial do Mês de Fevereiro</strong>
                {/*<DevForm onSubmit={handleAddDev}/>*/}
            </aside>
            <main>
                <ul>
                    {escalas.map(escala => (
                        <EscalaItem escala={escala} key={escala._id}/>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
