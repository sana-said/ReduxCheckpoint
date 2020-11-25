import React from 'react';
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch} from "react-redux";
import {addTask} from "./Actions/Action"


function AddTask() {
    const [clear,setClear]=useState("")
    const [task, setTask]=useState({
        id:"",
        description:"",
        isDone: false,
    })
    const handleChange = e => {
        setTask({...task,description:e.target.value})
        setClear(e.target.value)
    }
    const saveTask =() =>{
        setTask({...task,id:uuidv4()})
        dispatch(addTask(task))
        setClear("")
    }

    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" placeholder="Add your task" value={clear} onChange={handleChange}/>
            <button onClick={saveTask} >ADD</button>
        </div>
    )
}

export default AddTask
