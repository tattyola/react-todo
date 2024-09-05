import React, {useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


const Form = ({inputText, setInputText, todos, setTodos, editTodo, setEditTodo}) => {

    const inputChange = (e) => {
        setInputText(e.target.value)
    }

    const upadteTodo = (name, id, completed) => {
        const newTodo = todos.map(todo => todo.id === id ? {name, id, completed} : todo)
        setTodos(newTodo)
        setEditTodo('')
    }

    useEffect(() => {
        if(editTodo) {
            setInputText(editTodo.name)
        } else {
            setInputText('')
        }
    }, [editTodo, setInputText]);

    const formSubmit = (e) => {
        e.preventDefault()

        if(!editTodo) {
            // to add
            setTodos([...todos, {
                id: uuidv4(),
                name: inputText,
                completed: false
            }])
            setInputText('')
        } else {
        // to edit
            upadteTodo(inputText, editTodo.id, editTodo.completed)
        }

    }

    return (
        <form className='form' onSubmit={formSubmit}>
            <input
                className='input'
                placeholder='Add task'
                type="text"
                value={inputText}
                onChange={inputChange}
            />
            <button
                className='button'
            >{editTodo ? 'Update' : 'Add'}
            </button>
        </form>
    );
};

export default Form;
