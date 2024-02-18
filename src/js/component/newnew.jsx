// ToDo.jsx

import React, { useState, useEffect } from 'react';
import FetchAll from './FetchAll';

function TodoItem({label, delete_todo}){
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

const ToDoPlusCancel = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchTasks = async () => {
            try {
                const response = await fetch(
                    "https://playground.4geeks.com/apis/fake/todos/user/michaelmira"
                );
                const body = await response.json();
                setTasks(body);
            } catch (error) {
                alert(error);
            }
        };

        fetchTasks();
    }, []); // Empty dependency array ensures that this effect runs only once on mount

    const addTaskToApi = async () => {
        // Create a new task object
        const newTaskObject = {
            done: false,
            label: newTask
        };

        // Update the tasks state
        const updatedTasks = [...tasks, newTaskObject];
        setTasks(updatedTasks);

        // Update the API with the new tasks
        try {
            await fetch(
                "https://playground.4geeks.com/apis/fake/todos/user/michaelmira", {
                    method: "PUT",
                    body: JSON.stringify(updatedTasks),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        } catch (error) {
            alert(error);
        }
    };

    const deleteTask = async (taskId) => {
        // Filter out the task to be deleted from the local state
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    
        // Update the API with the updated tasks
        try {
            await fetch(
                "https://playground.4geeks.com/apis/fake/todos/user/michaelmira", {
                    method: "PUT",
                    body: JSON.stringify(updatedTasks),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        } catch (error) {
            alert(error);
        }
    };
    
    return (
        <div className='text-center'>
            <h1 className="text-center">
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.label}
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTaskToApi}>
                    Add Task
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
            </h1>
        </div>
    );
};

export default ToDoPlusCancel