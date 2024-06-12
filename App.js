import './App.css';
//import Header from './MyComponents/Header';
import Todos from "./MyComponents/Todos";
import Footer from './MyComponents/Footer';
import React,{useState, useEffect} from 'react';
import AddTodo from './MyComponents/AddTodo';
//import About from './MyComponents/About';



function App() {
  let initTodo;

  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
 
  const[desc,setDesc]=useState('');

  const[newTodo, setNewTodo]=useState('');

  const [todos , setTodos]=useState([initTodo]);

  const onDelete = (todo)=>{
    console.log("I am indelete of todo",todos);
    
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
}));
localStorage.setItem("todos",JSON.stringify(todos));
}

  let sno;
  const addTodo =(title,desc)=>{
    console.log("I am adding this todo",title,desc)
    if(todos.length===0){
      sno=0;
    }
    else{
    sno=todos[todos.length-1].sno+1;
    }
    const mytodo={
      sno:sno,
      title: title,
      desc:desc,

    }
    setTodos([...todos,mytodo]);
    setNewTodo('');
    setDesc('');
    console.log(mytodo);

    
      localStorage.setItem("todos",JSON.stringify(todos));
    
  }


  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  
  return (
    <div>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
    

      <Footer/>
 
    </div>
  ); 
}

export default App;
