import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './style/signup.css'
//import SignUpService from './SignUpService'
import axios from "axios";

export default function SignUp() {
  const[name,setName]=useState('');
  const[mail,setMail]=useState('');

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate=useNavigate();
  //const NavigateHeader;

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match')
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long')
    } else {
      setPasswordError('password correct')
    }
  }

  const handleSignUp = (e) => {
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
    try {
      const response = axios.post('http://localhost:8181/api/v1/auth/register', {
        name: name,
        email: mail,
        password: password
      });

      console.log(response); // You can handle the response accordingly based on your backend API

      navigate("/Home");
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error, e.g., show an error message to the user
    }
  };

  return (
    <div className='back'>
      <form className='signup' >
        <center>
          <h1 className='sign' style={{color:'purple',fontFamily:'brush script mt'}}>SignUp</h1>
          <br />
          <label style={{color:"black"}}>Name</label>
          <br />
          <br />
          <TextField id="outlined-basic" label="name" variant="outlined" type="text" required value={name} onChange={(e)=>setName(e.target.value)} />
          <br />
          <br />
          <label style={{color:"black"}}>Email</label>
          <br />
          <br />
          <TextField id="outlined-basic" label="email" variant="outlined" type="email" required value={mail} onChange={(e)=>setMail(e.target.value)} />
          <br />
          <br />
          <label style={{color:"black"}}>Password</label>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <label style={{color:"black"}}>Confirm Password</label>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="confirm"
            variant="outlined"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </center>
        <br/>
        <Box textAlign="center">
          <Button variant="contained" color="secondary" type="submit" onClick={handleSignUp}>
            SIGNUP
          </Button>
        </Box>
        <p>
          <center>
            Have an Account? <Link to="/">Login</Link>
          </center>
        </p>
      </form>
    </div>
  )
}