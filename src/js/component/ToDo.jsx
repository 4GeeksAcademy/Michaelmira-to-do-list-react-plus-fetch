// ToDo.jsx

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

function TodoItem({label, is_done, delete_todo, toggle_todo}){
	return (
        <>
            <div className="todo-item bg-white border d-flex align-items-center justify-content-between w-100">
                <input type="checkbox"checked={is_done} onChange={toggle_todo} />
                <span className="todo-text"> {label} </span>
                <button type="button" className="btn btn-danger" onClick= {delete_todo}>
                    Delete
                </button>
            </div>
        </>
    )
}

function ToDoPlusCancel() {
    const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState("");

	useEffect(() => {
		const local_todos = localStorage.getItem("todos");
		if (local_todos) {
			setTodos(JSON.parse(local_todos));
		}
	}, []);

	// Keeps the thing in local storage so upson refresh it will keep data
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

    const inputStyle = {
        border: 'none',  // Remove the border
        outline: 'none',  // Remove the default focus outline
        width: "100",
    };
    
    return (
        <>
            <div className="div row align-items-center fs-4 w-100 ">
                <div className="col-12">
                    <div className="row">
                        <form 
                        onSubmit={(ev) => {
                            ev.preventDefault();
                            if (todoInput.length > 0) {
                                setTodos([
                                    {
                                        label: todoInput,
                                        is_done: false,
                                    },
                                    ...todos,
                                ]);
                                setTodoInput("");
                            }
                        }}
                        className="w-100" 
                        >
                            <label htmlFor="toDoInput"></label>
                            <input 
                                id="toDoInput"
                                className='text-body-tertiary' 
                                type="text" 
                                placeholder="What needs to be done? " 
                                required 
                                style={inputStyle}
                                value={todoInput}
                                onChange={ev => setTodoInput(ev.target.value)}
                            >
                            </input>
                            {todos.map((item, idx) => (
                                <TodoItem 
                                    key={idx}
                                    label={item.label}
                                    is_done={item.is_done}
                                    toggle_todo={() => 
                                        setTodos(
                                            todos.toSpliced(idx, 1, {
                                                label: item.label,
                                                is_done: !item.is_done,
                                            })
                                        )
                                    }
                                    delete_todo={() => 
                                        setTodos(
                                            todos.toSpliced(idx, 1
                                            )
                                        )
                                    }
                                />
                            ))}
                            <small>{todos.filter((item) => item.is_done).length} todos left to do</small>
                        </form>
                    </div>                    
                </div>     
            </div>
        </>
    );
};

export default ToDoPlusCancel

// add input values to the to dos so that everytime you 