
import  React, { useState } from 'react';
import fire from'./fire';
const Hero = () =>{
    const [title, settitle] = useState('');
    const handleInputChange = (e) =>{
    settitle(e.target.value); 
    }
    const createtodo = () =>{
        const todoRef = fire.database().ref('todo');
        const Todo = {
            title,
            complete: false,
        }
        todoRef.push(Todo);
    }

    return(
        <>
        <div>
            <h2>CREATE YOUR TODO</h2>
            <input type="text" onChange={handleInputChange} value={title} />
            <br />
            <button className="addbtn" onClick={createtodo}>ADD TODO</button>

        </div>
        </>
    );
}
export default Hero;

/*
//login authentication

import React from 'react';
const Hero = ({logout}) =>{
    return(
        <section className="hero">
            <nav>
        <h1>WELCOME</h1> 
       <a href="https://getbootstrap.com/" class="btn btn-primary">Go somewhere</a> 

        <a href="https://react-novel.netlify.app/" className="btn5">LOOK IT</a>
        <button onClick={logout}>LOG OUT</button>
        </nav>
        </section>
        
        
    );

}
export default Hero;
*/