import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';


export default function Novo(){
    const [descricao, setDescricao] = useState('');
    const [titulo, setTitulo] = useState('');
    
    async function handleSubmit(event) {
    event.preventDefault();
        if(titulo != ''){
        if(descricao != ''){
        await api.post('/tarefa', {"titulo": titulo, "descricao": descricao, "status": "0"})
        }
        }
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="titulo"></label>
            <input 
                id="titulo"
                placeholder="Digite um título"
                value={titulo}
                onChange={event => setTitulo(event.target.value)}
            />
            <label htmlFor="descricao"></label>
            <input 
                id="descricao"
                placeholder="Digite uma descrição"
                value={descricao}
                onChange={event => setDescricao(event.target.value)}
            />

            <button type="submit" className="btn">+</button>
        </form>

    )
}