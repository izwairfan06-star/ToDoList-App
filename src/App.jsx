import { useState } from 'react'
import './App.css'

function App() {
  let [todolist, settodolist] = useState([])

  let savetodolist = (event) => {
    event.preventDefault(); // Moved to the top to stop the reload immediately 
    
    let toname = event.target.toname.value.trim(); // .trim() prevents adding empty spaces
    
    if (toname === "") {
      alert("Please enter a task!");
      return;
    }

    if (!todolist.includes(toname)) {
      let finaldolist = [...todolist, toname] 
      settodolist(finaldolist);
      event.target.reset(); // Clears the input field after successful add!
    } else {
      alert("To do List already exists")
    }
  }

  // Capitalized the component call and added the 'key' prop
  let list = todolist.map((value, index) => {
     return (
      <TodoListItem key={index} value={value} indexNumber={index} todolist={todolist} settodolist={settodolist}/>
     )
  })

  return (
    <div className="App">
      <h1>To do List App</h1>
      <form onSubmit={savetodolist}>
        <input type='text' name='toname' />
        <button type='submit'>Save</button>
      </form>
      <div className="Outerdiv">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default App

// 1. Capitalized the function name so React recognizes it as a component
function TodoListItem({ value,indexNumber,todolist,settodolist }) {
  let [status,setstatus]=useState(false)
  let deleterow=()=>{
    let finaldata=todolist.filter((v,i)=>i!=indexNumber)
    settodolist(finaldata);
  }
  let checkStatus=()=>{
      setstatus(!status);
  }
  return (
    <li onClick={checkStatus} className={(status)? 'completetodo': ''}>{indexNumber+1}.    {value} <span onClick={deleterow}>&times;</span></li>
  )
}