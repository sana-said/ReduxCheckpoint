import React from "react";
import {useDispatch} from "react-redux"
import {editTask} from "./Actions/Action" 

function Task({ el }) {
     const dispatch = useDispatch()
     
  return (
    <div key={el.id}>
      <p>
        {el.description}
        {el.isDone.toString()}
      </p>
      <button onClick= {() => dispatch (editTask(el.id))}>EDIT</button>
    </div>
  );
}

export default Task;
