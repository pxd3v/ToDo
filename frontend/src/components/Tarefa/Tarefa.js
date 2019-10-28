import React, { useEffect, useState } from 'react';

import './styles.css'
import api from '../../services/api'

const Tarefa = (props) => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        async function loadTarefas() {
            const response = await api.get('/tarefa', {
            });

            setTarefas(response.data)
        }
        loadTarefas();
    }, [tarefas])

    async function handleClick(tarefa) {
        if(tarefa.status == 1){
            await api.put(`/tarefa/${tarefa.id}`, {"titulo": tarefa.titulo, "descricao": tarefa.descricao, "status": "0"})
        }
        else{
            await api.put(`/tarefa/${tarefa.id}`, {"titulo": tarefa.titulo, "descricao": tarefa.descricao, "status": "1"})
        }
    }

    if(props.stats === "all")
    {
        return (
            <div className={props.show ? "tarefa":"off"}>
            <ul>
            {tarefas.map(function retorna(tarefa){
                return(
                    <li className="all"key={tarefa.id}>
                <header>{tarefa.titulo}</header>
                <p>{tarefa.descricao}</p>
                <button className={tarefa.status == 1 ? "on":"off"}onClick={ponte}></button>
                </li>
            )
                function ponte(){
                    handleClick(tarefa)
                    
                }
            })}
            </ul>
            </div> 
        )
    }
    else if(props.stats)
    {
        return (
            <div className={props.show ? "tarefa":"off"}>
                <ul>
                {tarefas.map(function retorna(tarefa){
                if(tarefa.status == 1){
                    return(
                        <li className="pendente" key={tarefa._id}>
                        <header>{tarefa.titulo}</header>
                        <p>{tarefa.descricao}</p>
                        </li>
                    )
                }
                })}
                </ul>
            </div> 
        )
    }else 
    {
    return (
        <div className={props.show ? "tarefa":"off"}>
        <ul>
        {tarefas.map(function retorna(tarefa){
        if(tarefa.status == 0){
            return(
                <li className="feitos" key={tarefa._id}>
                <header>{tarefa.titulo}</header>
                <p>{tarefa.descricao}</p>
                </li>
            )
        }
        })}
        </ul>
    </div> 
    )
    }
}

export default Tarefa