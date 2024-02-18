// ToDo.jsx

import React, { useState, useEffect } from 'react';

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

fetch('https://playground.4geeks.com/apis/fake/todos/user/michaelmira', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Will be true if the response is successful
        console.log(resp.status); // The status code=200 or code=400 etc.
        console.log(resp.text()); // Will try to return the exact result as a string
        return resp.json(); // (returns promise) Will try to parse the result as JSON and return a promise that you can .then for results
    })
    .then(data => {
        // Here is where your code should start after the fetch finishes
        console.log(data); // This will print on the console the exact object received from the server
    })
    .catch(error => {
        // Error handling
        console.log(error);
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ToDoPlusCancel() {
    const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState("");

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