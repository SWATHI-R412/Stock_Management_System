import React,{useState} from 'react';
import { AppBar,Toolbar,Tabs,Tab,Typography,Button} from '@mui/material';
//import logo from './logo.png';
import {Link} from 'react-router-dom';
//import './header.css';
function HeaderComponent() {
  const [count, setCount] = useState();
  return (
    <React.Fragment>
    <AppBar position="static" style={{background:'transparent', boxShadow:'none', color:'white'}}>
    <Toolbar>
    <h1 style={{color:'purple',fontFamily:'brush script mt'}}>STOCK MANAGEMENT SYSTEM</h1>
    <Tabs sx={{marginLeft:'auto'}}  value={count} onChange={(e,count) => setCount(count)} textColor= 'black'>
    <Link to="/Brand"><Tab label="📈 Brand" sx={{color:'purple',textDecoration:'none',fontSize:'100%',fontFamily:'brush script mt'}}/></Link>
    <Link to="/Category"><Tab label="🛍️ Category" sx={{color:'purple',textDecoration:'none',fontSize:'100%',fontFamily:'brush script mt'}}/></Link>
    <Link to="/Product"><Tab label="🛒 Product" sx={{color:'purple',textDecoration:'none',fontSize:'100%',fontFamily:'brush script mt'}}/></Link>
    <Link to="/Orders"><Tab label="🚚 Orders" sx={{color:'purple',textDecoration:'none',fontSize:'100%',fontFamily:'brush script mt'}}/></Link>
    <Link to="/Report"><Tab label="📝 Report" sx={{color:'purple',textDecoration:'none',fontSize:'100%',fontFamily:'brush script mt'}}/></Link>
    <Link to="/ProfilePage"><Tab label="👤 Update Profile" sx={{color:'purple',textDecoration:'none',fontSize:'100%',fontFamily:'brush script mt'}}/></Link>
    {/* <Link to="/FeedBack"><Tab label="👍 Feedback" sx={{color:'purple',textDecoration:'none',fontSize:'100%',fontFamily:'brush script mt'}}/></Link> */}

    </Tabs>
    
    </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

export default HeaderComponent