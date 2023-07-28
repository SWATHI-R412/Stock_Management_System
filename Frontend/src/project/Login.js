import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react'
import './style/login.css'
export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
        name:name,
        email: email,
        password: password
      });

      console.log(response); // You can handle the response accordingly based on your backend API

      nav("/Home");
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error, e.g., show an error message to the user
    }
  };
  return (
    <div>

        <form  className='login'>
      
        <center>
        <h1 style={{color:'purple',fontFamily:'brush script mt'}}>Login</h1><br></br>
        <label style={{color:"black"}}><bold>Name</bold></label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="name" 
        variant="outlined" type="text" required value={name} onChange={(e)=>setName(e.target.value)}/><br /></bold>
        <br></br>
        <label style={{color:"black"}}><bold>Email</bold></label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/><br /></bold>
        <br></br>
        <label style={{color:"black"}}>Password</label><br></br>
        <br></br>
        <TextField id  ="outlined-basic"  label="password" variant="outlined" type="password" required 
        value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
        <br></br>
        <br></br>
        </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' onClick={handleLogin}>LOGIN</Button>
        </Box>
        <br></br>
        <br></br>
        <p><center>Don't have an Account? <Link to="/Signup">Signup</Link></center></p>
        </form>

    </div>
  )
}


