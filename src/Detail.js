import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export default function Detail() {
//   const param=useParams();
//   return (
//     <div className='container3'> 
//     <h1>{param.id}</h1>
//     </div>
//   )
// }

  
const param=useParams();
const navigate=useNavigate();
const [Detail1,setDetail1]=useState([])
useEffect(()=>{
  fetch("https://630ba5b883986f74a7b497e5.mockapi.io/Product/"+param.id,
  {
    Method:"Get"
  })
  .then((res)=>{return res.json()})
  .then((res)=>{setDetail1(res)})
},[])











  return (
    
      

      
           <div className='container3'>
           

        <div className='first1'>
          <div className='forset'>
             <div class="card">
                <img src={Detail1.Pimage} alt="John"/>
                 <p className='pname2'>{Detail1.Pname}</p>
                 <p class="title rupee">From &#8377; {Detail1.Pprice}</p>
              
              </div>
              <button className='de' onClick={()=>{
              fetch("https://630ba5b883986f74a7b497e5.mockapi.io/Product/"+param.id,
              {
                method:"DELETE"
              })
              .then(
                  (res)=>{navigate("/All_item")}
              );

            }}>DELETE</button>



<button onClick={()=>{
              navigate("/All_item/Detail/Edit_item/"+param.id);

            }}>EDIT</button>    

          </div>  
          </div>      
             
       
        
        <div className='first2'>

              <p className='content1'><h5 className='network'>NETWORK</h5>GSM / HSPA / LTE / 5G</p><br/>

              <p className='content1'><h5 className='network'>DISPLAY</h5>	IPS LCD, 120Hz 6.6 inches, 104.8 cm2
	                                                    1080 x 2412 pixels, 20:9 ratio</p><br/>

              <p className='content1'><h5 className='network'>PLATFORM</h5>Android 12, Realme UI 3.0,
	                                                    Qualcomm SM6375 Snapdragon 695 5G ,
	                                                    Octa-core 
	                                                    Adreno 619</p><br/>

               <p className='content1'><h5 className='network'>MEMORY</h5>microSDXC ,
                                        Internal	128GB 6GB RAM, 128GB 8GB RAM,
                                      	UFS 2.2</p><br/>

                <p className='content1'><h5 className='network'>MAIN CAMERA</h5>64 MP, f/1.8, 26mm (wide), PDAF
                                                      8 MP, f/2.2, 119˚, 16mm , 1/4.0", 1.12µm
                                                      2 MP, f/2.4, 
                                                      	LED flash, HDR, panorama,
                                                      	1080p@30fps</p><br/>                          

                <p className='content1'><h5 className='network'>SELFIE CAMERA</h5>16 MP, f/2.1, 26mm , 1/3.09", 1.0µm
                                                           	HDR, panorama,
                                                            	1080p@30fps</p><br/>



                <p className='content1'><h5 className='network'>BATTERY</h5>Li-Po 5000 mAh, non-removable
                                                  Charging	Fast charging 33W</p><br/>


        </div>
        </div> 
         
    
  )
}










