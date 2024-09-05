import React from 'react';
import {MdDelete, MdDone, MdEdit} from "react-icons/md";


const TaskList = ({inputText, setInputText, todos, setTodos, editTodo, setEditTodo}) => {

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))

        // const newTodos = todos.filter(todo => todo.id !== id)
        // setTodos(newTodos)
    }

    const handleEdit = (id) => {
        const newTodos = todos.find(todo => todo.id === id)
        setEditTodo(newTodos)
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map(el => {
                if(el.id === todo.id) {
                    return {...el, completed: !el.completed}
                }
                return el;
            })
        )
    }

    return (
        <div className='items'>
            {todos.map(todo => (
                <li className='list-item' key={todo.id}>
                    <p className={`list ${todo.completed ? 'completed' : ''}`}>
                        {todo.name}
                    </p>
                    <div >
                        <button onClick={()=>handleComplete(todo)} className='task-btn complete-btn'><MdDone className='icon'/>
                        </button>
                        <button onClick={()=>handleEdit(todo.id)} className='task-btn edit-btn'><MdEdit className='icon'/>
                        </button>
                        <button onClick={()=>handleDelete(todo.id)} className='task-btn delete-btn'><MdDelete className='icon'/>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TaskList;
