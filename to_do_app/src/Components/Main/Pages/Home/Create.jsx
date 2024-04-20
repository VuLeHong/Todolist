import axios from 'axios'
import React, { useState } from 'react'
import './Home.css'

function Create() {
  const [task, setTask] = useState()
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleAdd = () => {
      axios.post('http://localhost:3000/add', {email:auth.email, task_name: task})
      .then( result=> {
        if(result){
          location.reload()
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='create_form'>
      <form onSubmit={handleAdd}>
        <input type="text" placeholder="Enter Task"  onChange={ (e) => setTask(e.target.value)}/>
        <button type="submit" >Add</button>
      </form>
        

    </div>
  )
}

export default Create