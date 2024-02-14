import React from 'react'

const NotHome = () => {
    // ["do the dishes", "walk the dog"]
    // [{id: "someid", done: false, label:\"do the dishes"}]
    const [tasks, setTasks] = useState([]);
    const [ newTask, setNewTask] = useState("");
    function getTasks() {
        // Fetchf from api
        fetch(
            "https://playground.4geeks.com/apis/fake/todos/user/miami-61"
        )
            .then((response) => {
                if (response.ok) {
                    throw Error("response was not successful");
                }
                // update the task state if successfull
                return response.json():
                }
            })
            .then((responseBodyAsJson) => {
                setTasks(responseBodyAsJson);
            })
            .catch((error) =>{
                // show an alert if not
                alert(error);
            });
        };

        function addTaskToApi() {
            // fetch to api using PUT and the new Array of tasks
            const newTaskObject ={
                done: false,
                label: newTask
            }
            const updateTask = [
                ...tasks,
                newTaskObject
            ]
            
            
            fetch (
                "https://playground.4geeks.com/apis/fake/todos/user/miami-61", {
                    method: "PUT",
                    body: JSON.stringify()
                })
        }

  return (
    <div className='text-center'>
        <h1 className="text-center">
            <ul>
                {tasks.map((task) => (
                    <li key ={task.id}>
                        {task.label}
                    </li>
                ))}
            </ul>
            <input type="text" />
            <button
                className=''
        </h1>
    
    </div>
  
    ) 
}

export default NotHome