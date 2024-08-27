import { useEffect, useState } from "react"
import "./index.css"

function ToDoList(){

   
    const   [task, setTask] = useState(() => {
            const savedItems = localStorage.getItem("ITEMS");
            return savedItems == null ? [] : JSON.parse(savedItems);});

    const   [newTask, setNewTask] = useState([]);

    useEffect (() =>{
        localStorage.setItem("ITEMS", JSON.stringify(task));
    }, [task]);

    function handleInputChange(e){
        setNewTask(e.target.value)
    }
    
    function addTask(){
        if(newTask.trim() !== ""){
        setTask(t =>[...t, newTask])
        setNewTask("")
        }
    }
    
    function deleteTask(index){
        
        const updateTask = task.filter ((_, i) => i !== index);
        setTask(updateTask);
    }
    
    


    return(
        <div className="ToDoList">
            <h1>To Do List</h1>
            <div>
            <input type="text" placeholder="Enter a Task" value={newTask} onChange={handleInputChange}/>
            <button className="addBtn" onClick={addTask}>Add</button>
            </div>
            
            <ol>
                {task.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="DeleteBtn" onClick={() => deleteTask (index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
        
    )

}




export default ToDoList