import React from 'react';
import fire from './fire';
const Todocompo = ({Todo}) =>{
    const deletetodo = () =>{
        const todoRef = fire.database().ref("todo").child(Todo.id);
        todoRef.remove();
    }
    const completetodo = () =>{
        const todoRef = fire.database().ref("todo").child(Todo.id);
        todoRef.update({
            complete: !Todo.complete,
        });
    }
    
    console.log(Todo);
    return(
        <>
        <h1 className={Todo.complete ? 'complete' : ''}>{Todo.title}</h1>
        <div>
        <button className="btn1" onClick={deletetodo} >DELETE</button>
        </div>
        <br />
        <button className="btn2" onClick={completetodo} >COMPLETE</button>
        </>
    );
}
export default Todocompo;