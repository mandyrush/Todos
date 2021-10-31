import React from 'react';

function Todo (props) {
    return (
        <li>
            {props.todo} 
            <button onClick={() => props.deleteTodo(props.index)}>
                Delete
            </button>
        </li>
    )
}

export default Todo;