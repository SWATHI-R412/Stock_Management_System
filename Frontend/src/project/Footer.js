import React from 'react'
import "./style/footer.css";
function Footer() {
  return (
    <div>
    <div className="foot">
  <h1>Contact Us</h1>
  </div>
  <div className='blur'>
  <div className="row">
  <div className="column">
    <div className="card">
    
      <div className="container">
        <h2>Payment Details</h2>
        <p className="title"><b>Mr Martin</b></p>
        <p>📞:9875612345</p>
        <p>📧:
        <a href='https://www.gmail.com'>martin@example.com</a>
        </p>
    
      </div>
    </div>
  </div>

  </div>
  <div className="column">
    <div className="card">
    
      <div className="container">
        <h2>Online details</h2>
        <p className="title"><b>Mr PaulRaj</b></p>
        <p>📞:789067890</p>
        <p>📧:
        <a href='https://www.gmail.com'>rajpaul@example.com</a>
        </p>
        
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
     
      <div className="container">
        <h3>General</h3>
        <p className="title"><b>Mrs Aaluma</b></p>
        <p>📞:567890980</p>
        <p>📧:
        <a href='https://www.gmail.com'>aalu@example.com</a>
        </p>
       
      </div>
    </div>
  </div>
  <div className='ccc'>
  <h3><center>©Copyright2023StockManagementSystem</center></h3>
  </div>
  </div>
</div> 
    


 



  )
}

export default Footer