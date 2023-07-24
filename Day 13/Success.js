import React, { useEffect } from 'react';
//import {useSelector}
import {useSelector} from 'react-redux'
export default function(){
    //const user=useSelector((state)=>state.user)
    
    const user = useSelector((state) => state.user)
    useEffect (() => {
       console.log({user}) 
    },[])
    return(
        <div>
            <h1 style={{color: "black"}}>Updated profile,{user}</h1>
        </div>
    )

}
