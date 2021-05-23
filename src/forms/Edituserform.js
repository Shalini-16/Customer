import React, { useState, useEffect } from 'react';
const Edituserform = (props) =>{
   const [user, setuser] = useState(props.currentuser)
   useEffect(() =>{
    setuser(props.currentuser)
}, [props])
   const handleInputChange = (event) =>{
       const {name, value} = event.target
       setuser({...user, [name]: value})
   }
   
return(
    <form
    onSubmit={(event) =>{
        event.preventDefault()
        props.updateuser(user.id, user)
    }}
    >
        <label>Name</label>
        <div>
        <input type="text" name='name' value={user.name} onChange={handleInputChange} />
        </div>
         <label>Username</label>
         <div>
        <input type="text" name='username' value={user.username} onChange={handleInputChange} />
        </div>
        <button>update user</button>
        <br />
        <button onClick={() => props.setediting(false)} className="button muted-button">Cancel</button>
    </form>
)
}
export default Edituserform;