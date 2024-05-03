
import './App.css';
import { useState } from "react";
function App() {

  const [todoList, settodoList] = useState([])


  const saveTodoList = (event) => {
    let toname = event.target.toname.value;
    if (!todoList.includes(toname)) {
      let FinalTodo = [...todoList,toname]
      settodoList(FinalTodo)

    }
    else {
      alert("tODO NAME ALREADY EXISTS.....")
    }


    // alert(toname)
    event.preventDefault()
  }

  const items = todoList.map((value,index) =>{

    return(
      <TodoListItem values={value} key={index}
      indexnumber = {index}
      todoList={todoList}
      settodoList={settodoList}
      />
    )
  })

  return (
    <div className="App">


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



function TodoListItem ({values,todoList,settodoList,indexnumber}){
 let [status,setstatus] = useState(false)

 let checkstatus =()=>{
  setstatus(!status)        
 }


  const deleterow = ()=> {
    let finals = todoList.filter((v,i)=>i!=indexnumber)
    settodoList(finals) 
  }
  return(
    <li className={(status) ? 'completetodo' : ''} onClick={checkstatus}>{indexnumber +1  }. {values } <span onClick={deleterow}>&times;</span></li>  
  )
}

















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import logo from './logo.svg';
import './App.css';
import { useState } from "react";





function App() {

  const [todolist,settodolist] = useState([])

  let todosubmt = (event)=>{

    let toname = event.target.toname.value
    if(!todolist.includes(toname)){

      let finaltodo = [toname, ...todolist]
      settodolist(finaltodo)

    }
    else{
      alert("todo tag is alredy saved")
    }


    const items = todolist.map((value,index) => {
      return(
        <Todoitems

        value ={value}
        index = {index}
        todolist={todolist}
        settodolist={settodolist}

        
        key={index}/>  
        
      )
    })



  



   event.preventDefault()



  }
  return (
    <div className="App">
     <h1>Todo lsit</h1>
     <form  onSubmit={todosubmt} >
      <input  name = "toname"/>
      <button>onSubmit</button>
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



function Todoitems({settodolist,todolist,value,indec
}){

  return(
    <div>
     <li>HTMM <span>&times;</span></li>
    </div>
  )

}