import React, { useState } from 'react';
import TutorialDataService from '../services/Hookservice';
const Hookadd = () =>{
    const initialstate = {
        title: "",
        description: "",
        published: false
    }
    const [tutorial, settutorial] = useState(initialstate);
    const [submit, setsubmit] = useState(false);

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        settutorial({...tutorial, [name]: value});
    }

    const savetut = () =>{
        var data = {
            title: tutorial.title,
            description: tutorial.description,
            published: false
        }
        
        TutorialDataService.create(data)
        .then(() =>{
            setsubmit(true);
        })
        .catch(e => {
            console.log(e);
        });
    }
    const newadd = () =>{
        settutorial(initialstate);
        setsubmit(false);
    }
    return(
        <>
        <div className="Submit-form">
            <h4>you submiited successfully</h4>
            <button className="btn btn-primary" onClick={newadd}>ADD</button>
        </div>
        <div className="form-group">
        <label>TITLE</label>
        <input type="text"
        className="form-control" id="title" required value={"tutorial.title"} onChange={handleInputChange} name="title"/>
        </div>
        <div className="form-group">
        <label>DESCRIPTION</label>
        <input type="text" className="form-control" id="description"  required value={"tutorial.description"} onChange={handleInputChange} name="description"/> 
        </div>
        <button onClick={savetut} className="btn btn-success">SUBMIT</button>
       
        </>
    );

}
export default Hookadd;