import './App.css';
import { useSelector } from "react-redux"
import AddTask from './AddTask';
import ListTask from './ListTask';
import { useDispatch } from "react-redux";
import {filterTask} from "./Actions/Action"

function App() {
  const dispatch = useDispatch()
  const handleSelect = e =>{
    dispatch(filterTask(e.target.id))
  }

  return (
    <div className="App">
      <AddTask />
  
      <ListTask />
      <div>
        <input type="radio" name="btn" id="all" onChange={handleSelect}/>
        <label for="all" >SHOW ALL</label>
      </div>
      <div>
        <input type="radio" name="btn" id="true" onChange={handleSelect}/>
        <label for="true" >IS DONE</label>
      </div>
      <div>
        <input type="radio" name="btn" id="false" onChange={handleSelect} />
        <label for="false" >NOT DONE</label>
      </div>
      
    </div>
  );
}

export default App;
