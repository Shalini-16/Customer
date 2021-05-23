
import React, { useState } from 'react';
const Adduserform = (props) => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setuser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setuser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.username) return

        props.adduser(user)
        setuser(initialFormState)
      }}
    >
      <label>Name</label>
      <br />
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <br />
      <label>Username</label>
      <br />
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <br />
      <button>Add new user</button>
    </form>
  )
}

export default Adduserform;


