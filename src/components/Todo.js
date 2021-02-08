import React from 'react';
//Import Components
// import TodoList from './TodoList';

const Todo = ({ text, todo, todos, setTodos }) => {

    // Events
    const deleteHandler = () => {
        // console.log('delete');
        setTodos(todos.filter((element) => element.id !== todo.id))
    }

    const completeHandler = () =>{
        console.log('comp');
        setTodos(todos.map( item => {
            if(item.id === todo.id){
                // console.log(...item);
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check complete-btn'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash trash-btn'></i>
            </button>
        </div>
    )
}

export default Todo;