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
    };

    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchTasks = async () => {
            try {
                const response = await fetch(apiUrl);
                const body = await response.json();
                setTodos(body);
            } catch (error) {
                alert(error);
            }
        };

        fetchTasks();
    }, []); // Empty dependency array ensures that this effect runs only once on mount

    const addTaskToApi = async () => {
        try {
            // Create a new task object
            const newTaskObject = {
                done: false,
                label: todoInput
            };

            // Update the local state
            setTodos((prevTodos) => [newTaskObject, ...prevTodos]);

            const updatedTasks = [...todos, newTaskObject];
        setTodos(updatedTasks);

            // Update the API with the new tasks
            
            await fetch(apiUrl, {
                    method: "PUT",
                    body: JSON.stringify(updatedTasks),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            } catch (error) {
                alert(error);
            }
    };

    const deleteTask = async (taskId) => {
        try {
            // Update the local state (remove the task with the specified ID)
            setTodos((prevTodos) => prevTodos.filter(task => task.id !== taskId));

            // Update the API by sending a DELETE request
            await fetch(`${apiUrl}/${taskId}`, {
                method: "DELETE",
            });
        } catch (error) {
            alert(error);
        }
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
                                addTaskToApi()
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