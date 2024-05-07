
import './App.css';
import { useState } from "react";
import { tabs } from './data/tabs';
import { tab } from '@testing-library/user-event/dist/tab';

function App() {

  const [todoList, settodoList] = useState([])






  const saveTodoList = (event) => {
    let toname = event.target.toname.value;
    if (!todoList.includes(toname)) {
      let FinalTodo = [...todoList, toname]
      settodoList(FinalTodo)

    }
    else {
      alert("tODO NAME ALREADY EXISTS.....")
    }


    // alert(toname)
    event.preventDefault()
  }

  const items = todoList.map((value, index) => {

    return (
      <TodoListItem values={value} key={index}
        indexnumber={index}
        todoList={todoList}
        settodoList={settodoList}
      />
    )
  })








  const [activetabs ,setactivetabs] =useState(0)
  const [tabsshow,settabsshow] =useState(tabs[0])


let changedata=(index)=>{
  setactivetabs(index)
  settabsshow(tabs[index])


}

  return (
    <div className="App">
      
      <div className='tabsouter'>
        <h2 style={{ textAlign: 'left' }} >law prep vision mission and values</h2>

        <ul>
          {tabs.map((tabsitems,index)=>{
            return(
              <li>
                <button onClick={()=>changedata(index)} className={activetabs ==index ? 'activebutton' : ''}>{tabsitems.title}</button>
              </li>
            )
          })}

        </ul>
      
         {
          tabsshow!==undefined ? <p>{tabsshow.description}</p> : <h1>this is undefines</h1>
         }


      </div>


































      <h1>Todo list</h1>
      <form onSubmit={saveTodoList}>

        <input type='text' name='toname' />
        <button>save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {items}
        </ul>
      </div>


    </div>
  );
}

export default App;



function TodoListItem({ values, todoList, settodoList, indexnumber }) {
  let [status, setstatus] = useState(false)

  let checkstatus = () => {
    setstatus(!status)
  }


  const deleterow = () => {
    let finals = todoList.filter((v, i) => i != indexnumber)
    settodoList(finals)
  }
  return (
    <li className={(status) ? 'completetodo' : ''} onClick={checkstatus}>{indexnumber + 1}. {values} <span onClick={deleterow}>&times;</span></li>
  )
}
















