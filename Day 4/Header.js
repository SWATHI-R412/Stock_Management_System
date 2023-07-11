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
    <h1 style={{color:'purple'}}>STOCK MANAGEMENT SYSTEM</h1>
    <Tabs sx={{marginLeft:'auto'}}  value={count} onChange={(e,count) => setCount(count)} textColor= 'black'>
    <Link to="/Home"><Tab label="⌂ Home" sx={{color:'purple',textDecoration:'none',fontSize:'150%',fontFamily:'brush script mt'}}/></Link>
    <Link to="/Login"><Tab label="🔐 Login" sx={{color:'purple',textDecoration:'none',fontSize:'150%',fontFamily:'brush script mt'}}/></Link>

    {/* <Link to="/StockDetails"><Tab label="🏆Stock Details" sx={{color:'purple',textDecoration:'none'}}/></Link>
    <Link to="/ProductDetails"><Tab label="✍Product Details" sx={{color:'purple',textDecoration:'none',}} /></Link>
    <Link to="/OnlineOrder"><Tab label="Online Order" sx={{color:'purple',textDecoration:'none'}}/></Link> */}
    <Link to="/UpdateProfile"><Tab label="👤 Update Profile" sx={{color:'purple',textDecoration:'none',fontSize:'150%',fontFamily:'brush script mt'}}/></Link>
    </Tabs>
    
    </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

export default HeaderComponent