import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom' 

export default function All_item() {

  const [Product,setProduct]=useState([])
  
 

  useEffect(()=>{
        fetch('https://630ba5b883986f74a7b497e5.mockapi.io/Product')
        .then((res)=>{return res.json()})
      .then((res)=>{setProduct(res)})

  },[])

  const f=Product.map((e)=>{
      return (
        <Link to={"./Detail/"+e.id}>
           <div class="card">
            <img src={e.Pimage} alt="John"/>
           <p className='mp'>{e.Pname}</p>
            <p class="title rupee">From &#8377;{e.Pprice}</p>
             
       
         
        </div> 
        </Link> 
      )
  })
  return (
    <div>
       <div className="container1">
        
          {f}






        
{/* <div class="card">
            <img src="https://image01.realme.net/general/20220513/1652442252832.png.webp" alt="John"/>
           <h1>John Doe</h1>
            <p class="title">CEO  Founder, Example</p>
            <p>Harvard University</p>
       
         
        </div> */}

        </div>  
          

      

          
          
       </div>
    
  )
}
