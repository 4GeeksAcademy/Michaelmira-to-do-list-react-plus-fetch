// ToDo.jsx

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

function TodoItem({label, is_done, delete_todo, toggle_todo}){
	return (
        <>
            <div className="todo-item">
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
    };

    const buttonStyle = {
        border: "none",
        outline: "none,"
    };

    
    
    return (
        <>
            <div className="div row align-items-center fs-4 ">
                <div className="col-10">
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
                <div className="col-2 text-right">
                    <div style={{ textAlign: 'right' }}>
                        <button 
                            type="button " 
                            className="btn btn-sm btn-light text-body-tertiary"
                            id="eraseButton"
                            style = {buttonStyle}
                        >
                            X 
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoPlusCancel

// add input values to the to dos so that everytime you 