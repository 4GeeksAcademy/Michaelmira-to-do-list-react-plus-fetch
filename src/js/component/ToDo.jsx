// ToDo.jsx

import React, { useState, useEffect } from 'react';

function TodoItem({label, is_done, delete_todo, toggle_todo}){
	return (
        <>
            <div className="grayTextOnly ps-5 p-1 bg-white border d-flex justify-content-between">
                {/* <input type="checkbox"checked={is_done} onChange={toggle_todo} /> */}
                <span> {label} </span>
                <button type="button" className="btn" onClick= {delete_todo}>
                    X
                </button>
            </div>
        </>
    )
}

function ToDoPlusCancel() {
    const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState("");

    useEffect(() => {
        // Fetch data from the API when the componet mounts
        const fetchTasks = async () => {
            try {
                const response = await response.json(
                    "https://playground.4geeks.com/apis/fake/todos/user/miami-61"
                );
                const body = await response.json();
                setTodos(body);
            } catch (error) {
                alert(error);
            }
        };

        fetchTasks();
    }, []); //Empty dependency array ensures that this effect runs only once on mount 

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
            <div className="div align-items-center fs-4 mx-auto shadow">
        
                   
                    
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

                                    try { 
                                        // Update the API with the new tasks
                                        await fetch(
                                            "https://playground.4geeks.com/apis/fake/todos/user/miami-61", {
                                                method: "PUT",
                                                body: JSON.stringify([
                                                    {
                                                        label: todoInput,
                                                        is_done: false,
                                                    },
                                                    ...todos,
                                                ]),
                                                headers: {
                                                    "Content-Type": "application/json",
                                                },
                                            }
                                        );
                                    } catch (error) {
                                        alert(error);
                                    }
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
                            {/* <small className='ps-5'>{todos.filter((item) => item.is_done).length} todos left to do</small> */}
                            <div className="div border paper ">
                                <small className='ps-2 grayTextOnly  '>{todos.length} Item left</small>
                            </div>  
                        </form>

            </div>
        </>
    );
};

export default ToDoPlusCancel

// add input values to the to dos so that everytime you 