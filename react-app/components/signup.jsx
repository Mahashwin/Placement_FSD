import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'



const Signup = () => {
    var [name, setName] = useState("")
    var [email, setEmail] = useState("")
    var [rollno, setRollno] = useState("")
    var [password, setPassword] = useState("")
    var navigate = useNavigate()
    const handleChanges = async (e) => {
        var data = { name, email, rollno, password }
        console.log(data);
        e.preventDefault();
        try {
            const res = await axios.post("https://placement-fsd-8v0x.onrender.com/sign", data)
            if (res.status == 200) {
                alert('User Created Successfully.!!')
                navigate('/')
            }
            else {
                alert('User Not Created')
            }
        }
        catch (err) {
            console.log(err);
            alert('Error in the Logging in')
        }
    }
    return (
        <>
            <label htmlFor="name">FirstName</label>

            <input type="text" onChange={(e) => {
                setName(e.target.value)
            }}
                placeholder='Enter Your Name'
                id='name'
            />
            <label htmlFor="Rollno">Roll NO</label>
            <input type="text" onChange={(e) => {
                setRollno(e.target.value)
            }}
                id='rollno' placeholder='Enter Your Rollno' />
            <label htmlFor="Email">Email</label>
            <input type="text" onChange={(e) => {
                setEmail(e.target.value)
            }}
                id='email'
                placeholder='Enter Your Email'
            />
            <label htmlFor="password">Password</label>
            <input type="password" onChange={(e) => {
                setPassword(e.target.value)
            }} />
            <button onClick={handleChanges}>Sign Up </button>
        </>
    )
}

export default Signup