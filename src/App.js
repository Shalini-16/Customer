/*
import React, {useState } from 'react';
import Adduserform from './forms/Adduserform';
import Edituserform from './forms/Edituserform';

import Usertables from './tables/Usertables';
const App = () => {
  const userdata = [
    { id: 1, name: 'Shalini', username: 'xyz' },
    {id: 2, name: 'shweta', username: 'abc'},
    {id: 3, name:'aman', username: 'cde'},
    
  ]
  const initialFormState = {id: null, name: '', username: ''}
//setting state
  const [users, setusers] = useState(userdata);
  const [currentuser, setcurrentuser] = useState(initialFormState);
  const [editing, setediting] = useState(false);
  //crud operations

  const adduser = (user) =>{
    user.id = users.length + 1
    setusers([...users, user])
  }
  const deleteuser = (id) => {
    setediting(false)
    setusers(users.filter((user) => user.id !== id))
  }
  
  const updateuser = (id, updateduser) => {
    setediting(false)
    setusers(users.map((user) => (user.id === id ? updateduser : user)))
  }
  const edit = (user) =>{
    setediting(true)
    setcurrentuser({id: user.id, name: user.name, username: user.username})
  }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
            <h2>Edit user</h2>
            <Edituserform 
            editing={editing}
            setediting={setediting}
            currentuser={currentuser}
            updateuser={updateuser} />
            </div>
          ) : (
            <div>
          <h2>Add user</h2>
          <Adduserform adduser={adduser} />
          </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <Usertables users={users} edit={edit} deleteuser={deleteuser} />

        </div>
      </div>
    </div>
  )
}
export default App;
*/
/*

import React from 'react';
import Usertables from './tables/Usertables';
const App = () =>{
  return(
    <>
    <Usertables />
   </>
  );
}
export default App;
*/
//firebase authentication login signup

/*
import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import Logincomp from './Logincomp';
import Hero from './Hero';
const App = () =>{
  //setting states
  const [user, setuser] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailerror,  setemailerror] = useState('');
  const [passerror, setpasserror] = useState('');
  const [account, setaccount] = useState(false);
  const clearinputs = () =>{
    setemail('');
    setpassword('');
  }
  const clearerror = () =>{
    setemailerror('');
    setpasserror('');
  }
  const loginid = () =>{
    clearerror();
    firebase
    .auth()
   .signInWithEmailAndPassword(email, password)
   .catch((err) =>{
  switch (err.code){
  case "auth/invalid-email":
    case "auth/user-disabled":
      case "auth/user-not-found":
        setemailerror(err.message);
        break;
        case "auth/wrong-password":
          setpassword(err.message);
          break;
  }
});
  }
  const signup = () =>{
    clearerror();
    firebase
    .auth()
   .createUserWithEmailAndPassword(email, password)
   .catch((err) =>{
  switch (err.code){
  case "auth/email-already-in-use":
    case "auth/invalid-email":
        setemailerror(err.message);
        break;
        case "auth/weak-password":
        setpasserror(err.message);
          break;
  }}
    );
  }
const logout = () =>{
  firebase.auth().signOut();

}
  const authListener = () =>{
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        clearinputs();
        setuser(user);
      }
      else{
        setuser("");
      }
    });
  }
  useEffect(() =>{
    authListener();
  }, []);

  return(
    <>
    <div className="app">
      {user ? (
            <Hero logout={logout} />
      ) : (
        <Logincomp
     email={email} 
    setemail={setemail}
     password={password}
     setpassword={setpassword} 
    loginid={loginid}
    signup={signup}
    account={account} 
    setaccount={setaccount}
    emailerror={emailerror}
    passerror={passerror} />
      )}
     </div>
    </>
      
  );
}
export default App;
*/
//firebase real time database todo 
/*
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import firebase from './firebase';
import Reacttodo from './Reacttodo';
import './index.css';

const App = () =>{
  
  return(
    <>
    <div className="main">
    <h1 style={{textAlign: "center"}}>TODO</h1>
    <Hero />
    <Reacttodo />
    </div>
    </>
  );
}
export default App;
*/

//crud reactjs hooks
/*
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from 'react-router-dom';
import Hookadd from './hook/Hookadd';
import Hooklist from './hook/Hooklist';
const App = () =>{
  return(
    <>
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/addhook" className="navbar-brand">
          CRUD OPERATIONS
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/addhook"} className="nav-link">
              Addhook
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
          
        </div>
      </nav>
      <div className="container mt3">
        <h2>react firebase hooks</h2>
        <Switch>
          <Route exact path={["/", "/addhook"]} component={Hooklist} />
          <Route exact path="/add" component={Hookadd} />
        </Switch>
      </div>
    </div>
    </>
  );
}
export default App;
*/
/*

//login with google

import React from 'react';
import Google from './Google';
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from './firebase';

const App = () =>{
  return(
    <>
    <Google />
    </>
  );
}
export default App;
*/
/*
import React from 'react';
import Contacts from './components/Contacts';

const App = () =>{
  return(
    <>
     <div className="row">
      <div className="col-md-8 offset-md-2">
    <Contacts></Contacts>
    </div></div>
    </>
  );
}
export default App;
*/


import Contacts from './components/Contacts';
function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Contacts ></Contacts>
      </div>
    </div>
  );
}

export default App;
