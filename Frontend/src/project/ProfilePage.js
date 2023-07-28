import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { setUser } from './action'

import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './style/profilepage.css'
import Header from './Header'
export default function ProfilePage() {
  const dispatch = useDispatch();
  const[firstname,setFirstName]=useState('');
  const[lastname,setLastName]=useState('');
  const[username,setUserName]=useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('')
  const[mail,setMail]=useState('');
  const[contact,setContact]=useState('');
  
  const navigate=useNavigate();
 
  

  const handleProfile= (e) => {
    e.preventDefault()
    console.log("sri rama jayam");
    dispatch(setUser(username));
    
   
    axios.post("http://localhost:8080/prof",{
      firstname:firstname,
      lastname:lastname,
      username:username,
      oldPassword:oldPassword,
      newPassword:newPassword,
      mail:mail,
      contact:contact,

    }
      )
    .then((response)=>{
      console.log(response);
      navigate('/Success');
      
    })
    .catch((error)=>{
      console.error(error);
    });
  };
  return (
    <div>
      <div><Header/></div>

        <form  className='profilepage'>
        <center>
        <h2 style={{color:'purple',fontFamily:'brush script mt'}}>UPDATE PROFILE</h2><br></br>
        <center><img src="https://e7.pngegg.com/pngimages/798/436/png-clipart-computer-icons-user-profile-avatar-profile-heroes-black-thumbnail.png"width="150px" height="100px"></img></center><br></br><br></br>


        <label style={{color:"black"}}>FirstName</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="firstname" 
        variant="outlined" type="text" required value={firstname} onChange={(e) => setFirstName(e.target.value)}/><br /></bold>
        <br></br>

        <label style={{color:"black"}}>LastName</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="lastname" 
        variant="outlined" type="text" required value={lastname} onChange={(e) => setLastName(e.target.value)}/><br /></bold>
        <br></br>

        <label style={{color:"black"}}>Username</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="username" 
        variant="outlined" type="text" required value={username} onChange={(e) => setUserName(e.target.value)}/><br /></bold>
        <br></br>

        <label style={{color:"black"}}>Old Password</label><br></br>
        <br></br>
        <TextField id  ="outlined-basic"  label="old password" variant="outlined" type="password" required value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/><br />
        <br></br>
        <br></br>

        <label style={{color:"black"}}>New password</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="new password" 
        variant="outlined" type="password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/><br /></bold>
        <br></br>

        <label style={{color:"black"}}>Change email</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="email" required value={mail} onChange={(e) => setMail(e.target.value)}/><br /></bold>
        <br></br>

        <label style={{color:"black"}}>Edit Contact No</label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="contact no" 
        variant="outlined" type="number" required value={contact} onChange={(e) => setContact(e.target.value)}/><br /></bold>
        <br></br>

        </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' onClick={handleProfile} >UPDATE PROFILE</Button>
        </Box>
        <br></br>
        <br></br>
        </form>

    </div>
  )
}
// const App = (
//   <Provider store={store}>
//     <ProfilePage/>
//   </Provider>
// );
// export default App;
