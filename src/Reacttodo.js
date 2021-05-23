import React,{useState, useEffect} from 'react';
import fire from './fire';
import Todocompo from './Todocompo';
const Reacttodo = () =>{
    const [todolist, settodolist] = useState();
  useEffect(() =>{
    const todoRef = fire.database().ref("todo");
    todoRef.on("value", (snapshot) => {
      //console.log(snapshot.val());
      const todos = snapshot.val();
      const todolist = [];
      for(let id in todos){
        todolist.push({id, ...todos[id] });
      }
      console.log(todolist);
      settodolist(todolist);
    });
  }, []);
    return(
        <div>
        {todolist ? todolist.map((Todo, index) =>
         <Todocompo Todo={Todo} key={index} />) : ''}  </div>
    );
}
export default Reacttodo;
