
import './App.css';
import { useState } from "react";
import { tabs } from './data/tabs';

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











  const [activetab, setactivetab] = useState(0)
  const [tabshow, settabsshow] = useState(tabs[0])

  const changebtncolor =(indexss)=>{
    setactivetab(indexss)
  }


  return (
    <div className="App">
      
      <div className='tabsouter'>
        <h2 style={{ textAlign: 'left' }} >law prep vision mission and values</h2>

        <ul>
          {tabs.map((tabsitem, indexss) => {
            // alert(indexss)
            return (
              <li>
                <button onClick={()=>changebtncolor()} className={activetab==indexss? 'activebutton' : ''}>{tabsitem.title}</button>
              </li>
            )
          })}

        </ul>

        {
          tabshow !== undefined ?
            <p>{tabshow.description}</p>
            : ''
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
















