import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './style/register.css'
import axios from "axios"
export default function() {
  const[firstname,setFirstName]=useState('');
  const[lastname,setLastName]=useState('');
  const[username,setUserName]=useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const[mail,setMail]=useState('');
  const[contact,setContact]=useState('');
  const [passwordError, setPasswordError] = useState('')
  const navigate=useNavigate();
 
  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match')
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long')
    } else {
      setPasswordError('password correct')
    }
  }

  const handleRegister= (e) => {
    e.preventDefault()
    console.log("sri rama jayam");
    validatePassword();
    // Perform signup logic here if all fields are valid
    if (passwordError==='password correct') {
      // Perform signup logic
      console.log("hii");
      //navigate('/Home');
     
     
    }else{
      console.log("error")
    }
   
    axios.post("http://localhost:8080/reg",{
      firstname:firstname,
      lastname:lastname,
      username:username,
      password:password,
      confirmPassword:confirmPassword,
      mail:mail,
      contact:contact,

    }
      )
    .then((response)=>{
      console.log(response);
      navigate('/Home');
      
    })
    .catch((error)=>{
      console.error(error);
    });
  };
  
  return (
    <div>

        <form  className='register' >
        <center>
        <h1 style={{color:'purple',fontFamily:'brush script mt'}}>Register</h1><br></br>

        <label style={{color:'black'}}>FirstName</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="firstname" 
        variant="outlined" type="text" required value={firstname} onChange={(e) => setFirstName(e.target.value)}/><br /></bold>
        <br></br>

        <label style={{color:'black'}}>LastName</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="lastname" 
        variant="outlined" type="text" required value={lastname} onChange={(e) => setLastName(e.target.value)}/><br /></bold>
        <br></br>

        <label style={{color:'black'}}>Username</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="username" 
        variant="outlined" type="text" required value={username} onChange={(e) => setUserName(e.target.value)}/><br /></bold>
        <br></br>

        <label style={{color:'black'}}>Password</label><br></br>
        <br></br>
        <TextField id  ="outlined-basic"  label="password" variant="outlined" type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/><br />
        <br></br>
        <br></br>

        <label style={{color:'black'}}>Confirm password</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="confirm password" 
        variant="outlined" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/><br /></bold>
        <br></br>

        <label style={{color:'black'}}>Email</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="email" required value={mail} onChange={(e) => setMail(e.target.value)}/><br /></bold>
        <br></br>

        <label style={{color:'black'}}>Contact No</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="contact no" 
        variant="outlined" type="number" required value={contact} onChange={(e) => setContact(e.target.value)}/><br /></bold>
        <br></br>

        </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' onClick={handleRegister} >REGISTER</Button>
        </Box>
        <br></br>
        <br></br>
        </form>

    </div>
  )
}

