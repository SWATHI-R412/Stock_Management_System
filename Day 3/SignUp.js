import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './style/signup.css'
export default function() {
  return (
    <div>
         <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    ></Box>

        <form  className='signup'>
        <center>
        <h1>SignUp</h1><br></br>
        <label>Email</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Password</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="password" variant="outlined" type="password" required/><br />
        <br></br>
        <br></br>
        <label>Confirm Password</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="confirm" variant="outlined" type="password" required/><br />
        <br></br>
        <br></br>
        </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >SIGNUP</Button>
        </Box>
        <br></br>
        <br></br>
        
        <p><center>Have an Account? <Link to="/Login">Login</Link></center></p>
        </form>

    </div>
  )
}