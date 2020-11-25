export function addTask(newTask){
   return(
       {
           type: "ADD_TASK",
           payload: newTask,
       }
   )
}

export function filterTask (isDone){
    return(
        {
            type : "FILTER",
            payload: isDone,
        }
    )
}

export function editTask (id){
    return(
        {
            type : "EDIT",
            payload: id,
        }
    )

}