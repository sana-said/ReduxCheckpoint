import React from 'react'
import {useSelector} from "react-redux"
import Task from "./Task"

function ListTask() {
     const state = useSelector(state => state.ToDoReducer)
     const handleView = (viewType) =>{
         if(state.tasks){
        switch (viewType) {
            case "true":
              return(state.tasks.map(elm=>{
                if(elm.isDone===true)
                return(<Task el={elm} key={elm.id} />)}
                  ))
              case "false":
                return(state.tasks.map(elm=>{
                  if(elm.isDone===false)
                  return(<Task el={elm} key={elm.id} />)}
                    ))
            default:
              return(state.tasks.map(elm=><Task el={elm} key={elm.id} />
              ))
          }}
     }
        return (
        <div>
            {handleView(state.view)}
        </div>
    )
    
}

export default ListTask
