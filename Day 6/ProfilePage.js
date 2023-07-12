import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './style/profilepage.css'
export default function() {
  return (
    <div>

        <form  className='profilepage' action='http://localhost:3000/Home'>
        <center>
        <h1>Update Profile</h1><br></br>
        <center><img src="https://e7.pngegg.com/pngimages/798/436/png-clipart-computer-icons-user-profile-avatar-profile-heroes-black-thumbnail.png"width="100px" height="100px"></img></center><br></br><br></br>


        <label>FirstName</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="firstname" 
        variant="outlined" type="text" required /><br /></bold>
        <br></br>

        <label>LastName</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="lastname" 
        variant="outlined" type="text" required /><br /></bold>
        <br></br>

        <label>Username</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="username" 
        variant="outlined" type="text" required /><br /></bold>
        <br></br>

        <label>Old Password</label><br></br>
        <br></br>
        <TextField id  ="outlined-basic"  label="password" variant="outlined" type="password" required/><br />
        <br></br>
        <br></br>

        <label>New password</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="confirm password" 
        variant="outlined" type="password" required /><br /></bold>
        <br></br>

        <label>Change email</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="email" required /><br /></bold>
        <br></br>

        <label>Edit Contact No</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="contact no" 
        variant="outlined" type="number" required /><br /></bold>
        <br></br>

        </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >UPDATE PROFILE</Button>
        </Box>
        <br></br>
        <br></br>
        </form>

    </div>
  )
}

