import React from 'react'
const Usertables = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>
          <button onClick={() => props.edit(user) }
           className="button muted-button">Edit</button>
          <button onClick={() => props.deleteuser(user.id)}
           className="button muted-button">Delete</button>
        </td>
      </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}> NO USERS</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default Usertables;

/*
import React from 'react';
const contact = [{
  id: 1,
  name: "john",
  phone: "6765555455",
  email: "s8116666435@gmail.com",
},
{
id: 2,
name: "smith",
phone: "665443434",
email: "554333@gmail.com",
},
{
  id: 3,
  name: "jenny",
  phone: "77887666",
  email: "8888888@gmail.com",
},
];
//array destructuring
const Contact = ({name, email, phone}) => {
  return(
    <li>
      <h3>{name}</h3>
      <div>
      <strong>{email}</strong>
      </div>
      <div>{phone}</div>
      <button>EDIT</button>
      <button>REMOVE</button>


    </li>
  );
}

const Usertables = () =>{
  return(
    <section>
      <Adduserform/>
      
    <ul>
    {contact.map((contacts) => {
      return <Contact key={contact.name} {...contacts} />;
        
})}
</ul>
</section>
  );
}
export default Usertables;
*/