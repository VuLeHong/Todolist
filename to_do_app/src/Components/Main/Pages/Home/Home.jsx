import React, { useEffect, useState } from 'react'
import Create from './Create';
import axios from 'axios'
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import './Home.css';
function Home() {
    const [todos, setTodos] = useState([]);
    const auth = JSON.parse(localStorage.getItem("user"));
    //const t = auth.tasks;
    useEffect(() => {
        axios.post('http://localhost:3000/get', {email: auth.email}) 
        .then(result => {
                setTodos(result.data.tasks)
                //console.log(result.data)
        })
        .catch(err => console.log(err))
    }, [])
    //insomia nhận đc result nma home lại ko nhận đc json
    const handleEditdone = (index) => {
        axios.post('http://localhost:3000/updatedone',{email: auth.email, index})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    const handleEdit = (index) => {
        axios.post('http://localhost:3000/update',{email: auth.email, index})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    const handleDelete = (id) => {
        axios.post('http://localhost:3000/delete',{email: auth.email, id})
        .then(result => {
            location.reload()
        })  
        .catch(err => console.log(err))
    }
   // console.log(todos);
  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create/>
        {
            todos.length === 0 
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map((todo, index) =>(
                <div className='task'> 
                    <div className='checkbox' >
                        {todo.done 
                        ? 
                        <MdCheckBox className='icon' onClick={() => handleEdit(index)}/>
                        :
                        <MdCheckBoxOutlineBlank className='icon' onClick={() => handleEditdone(index)}/>}
                        
                        <p className={todo.done ? "line_through" : ""}>{todo.task_name}</p>
                    </div>
                    <div>
                        <span><MdDelete className='icon' onClick={() => handleDelete(todo._id)}/></span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home