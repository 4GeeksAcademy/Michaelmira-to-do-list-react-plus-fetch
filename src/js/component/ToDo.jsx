// ToDo.jsx

import React, { useState, useEffect } from 'react';
import FetchAll from './FetchAll';

function TodoItem({label, delete_todo,}){
	return (
        <>
            <div className="grayTextOnly ps-5 p-1 bg-white border d-flex justify-content-between">
                <span> {label} </span>
                <button type="button" className="btn" onClick= {delete_todo}>
                    X
                </button>
            </div>
        </>
    )
}



const apiUrl = "https://playground.4geeks.com/apis/fake/todos/user/michaelmira";




///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ToDoPlusCancel() {
    const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState("");

    const inputStyle = {
        border: 'none',  // Remove the border
        outline: 'none',  // Remove the default focus outline
        width: "100",
    };

    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
        handleAddTodo();
    };

    const handleAddTodo = () => {
        const newTodoObject ={
            label: todoInput,
            is_done:false,
        };

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodoObject),
        })
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw new Error(`Failed to add todo. Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("New todo added:", data);
                // You might want to update your state or trigger a fetch to update the todo list
            })
            .catch(error => {
                console.error("Error adding todo:", error.message);
            });
    };
    
    return (
        <>
            <div className="div align-items-center fs-4 mx-auto shadow">
                <FetchAll />
        
                   
                    
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
                                className='ms-5 p-1 '
                                id="toDoInput"
                                type="text" 
                                placeholder="What needs to be done? " 
                                required 
                                style={inputStyle}
                                value={todoInput}
                                onChange={handleInputChange}
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
                            <div className="div border paper ">
                                <small className='ps-2 grayTextOnly  '>{todos.length} Item left</small>
                            </div>  
                        </form>

            </div>
        </>
    );
};

export default ToDoPlusCancel