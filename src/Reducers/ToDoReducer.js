
let initState ={
    view : "all",
    tasks :[]
}


const ToDoReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {...state,tasks:[...state.tasks,action.payload]}
            
        case "EDIT":
            let tab=state.tasks.map(elm=>{
                if(elm.id===action.payload)
                    return{...elm,isDone:!elm.isDone}
                    else
            return elm;
            })
            return {...state,tasks:tab}
        case "FILTER":
            return {
                ...state ,view : action.payload
            }
        default:
            return state;

    };

}
export default ToDoReducer;
