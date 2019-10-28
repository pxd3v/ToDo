import React from 'react';
import "./styles.css"

const Menu = (props) => {
    
    return (
    <div className='menu'>
        <nav>
            <button onClick={props.handleTodos}>Todos</button>
            <button onClick={props.handlePendentes}>Pendentes</button>
            <button onClick={props.handleFeitos}>Feitos</button>
        </nav>
    </div>
    )
}

export default Menu