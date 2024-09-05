import './App.css';
import React, {useState} from "react";
import Header from "./Header";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
    // const arr = [
    //     {
    //         id: '1',
    //         name: 'js',
    //         completed: true
    //     },
    //     {
    //         id: '2',
    //         name: 'ts',
    //         completed: false
    //     },
    // ]
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    return (
        <div className="container">
            <div className='app-wrapper'>
                <Header/>
                <Form
                    inputText={inputText}
                    setInputText={setInputText}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                />
                <TaskList
                    inputText={inputText}
                    setInputText={setInputText}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                />
            </div>
        </div>
    );
}

export default App;
