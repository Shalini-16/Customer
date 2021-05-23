/*import React, { useEffect, useState } from 'react';
import firebase from './firebase';
const Google = () =>{
 //const [isLogIn, setisLogIn] = useState(false);
 //const [name, setname] = useState('');
 const [log, setlog] = useState({
  isLogIn: false,
  name: '',
}
); 
 
  const onSubmit = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          })
          .catch(function(error) {
           console.log(error);
          });
    }
    useEffect(() =>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
             console.log("User signed in");
             console.log(user.displayName + '\n' + user.email);
            
            setlog({  
              isLogIn: true,
              name: 'user.displayName',
            });
          }
          else
          {  
              console.log("No user signed in");
            }
          });     
    });
    return(
        <>
        <div className="login-area card mx-auto mt-5">
            {log.isLogIn === false ? 
             <div className="card-body p-5">
             <h5 className="text-center mb-4">WELCOME</h5>
             <button type="button" className="btn btn-primary text-white w-100" 
             onClick={onSubmit}>LOGIN WITH GOOGLE</button>

         </div>
          : 
          <>
          <div className="card-media">
             </div>
             <div className="card-body">
                <h5>{log.name}</h5>
                 </div>
                 </>
              }
        </div>
        </>
    );
            }
            export default Google;
            */
/* setlog([{isLogIn: true,
              name: displayName
            }]);

            const [log, setlog] = useState([{
   isLogIn: false,
   name: '',
 }
 ]); 
 */

import React, {useState, useEffect}  from 'react';
import firebase from './firebase';
const Google = () =>{
  const [log, setlog] = useState({
    isLogIn: false,
    name: '',
    photo: '',
  }
  ); 
 //const [isLogIn, setisLogIn] = useState(false);
 //const [name, setname] = useState('');
 
 
  const onSubmit = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          })
          .catch(function(error) {
           console.log(error);
          });
    }
    const logout = () =>{
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });}
    useEffect(() =>{
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
           console.log("User signed in");
           console.log(user.displayName + '\n' + user.email);
           setlog({  
            isLogIn: true,
            name: user.displayName,
            photo: user.photoURL,
          });
        }
        else
        {  
            console.log("No user signed in");
          }
        });     
  });
    
    return(
        <>
        <div className="login-area card mx-auto mt-5">
            
            {log.isLogIn === false ?
             <div className="card-body p-5">
               
             <h5 className="text-center mb-4">WELCOME</h5>
             <button type="button" className="btn btn-primary text-white w-100" 
             onClick={onSubmit}>LOGIN WITH GOOGLE</button>

           </div>
           :
           <>
           <div className="card-media">
             <img src={log.photo} alt="" />
             </div>
             <div className="card-body">
                <h5>{log.name}</h5>
                <button type="button"  className="btn btn-danger"  onClick={logout}>LOG OUT</button>
                 </div>
           </>
}

   </div>
      
        </>
    );
            }
            export default Google;