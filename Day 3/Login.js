import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './style/login.css'
export default function() {
  return (
    <div>

        <form  className='login'>
      
        <center>
        <h1>Login</h1><br></br>
        <label><bold>Email</bold></label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="text" required /><br /></bold>
        <br></br>
        <label>Password</label><br></br>
        <br></br>
        <TextField id  ="outlined-basic"  label="password" variant="outlined" type="password" required/><br />
        <br></br>
        <br></br>
        </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >LOGIN</Button>
        </Box>
        <br></br>
        <br></br>
        <p><center>Don't have an Account? <Link to="/Signup">Signup</Link></center></p>
        </form>

    </div>
  )
}