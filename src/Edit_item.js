import React, { useState , useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



export default function Edit_item() {

    const param=useParams();
  const navigate=useNavigate();
  const [Data,setData]=useState({});
 
  useEffect(()=>{
    fetch("https://630ba5b883986f74a7b497e5.mockapi.io/Product/"+param.id,
    {
      Method:"Get"
    })
    .then((res)=>{return res.json()})
    .then((res)=>{setData(res)})
  },[])
  
  return (
    <div>
      <div className='image1'>

        <div className='form1'>

        <form className='form1'>
          <div className='padding1'>
           <label for="lname" className='label1'>Product Name</label><br/>
            <input type="text" id="fname" name="fname" value={Data.Pname} className='input1'
            onChange={(e)=>{
             
              setData({...Data,Pname:e.target.value});
              
              }}/><br/>


            <label for="lname" className='label1'>Product Image</label><br/>
            <input type="text" value={Data.Pimage} id="lname" name="lname" className='input1'
            onChange={(e)=>{setData({...Data,Pimage:e.target.value});
            }}/><br/>


            <label for="lname" className='label1'>Product Price</label><br/>
            <input type="text" id="fname" value={Data.Pprice} name="fname" className='input1'
            onChange={(e)=>{setData({...Data,Pprice:e.target.value})}}/><br/>


            <label for="lname" className='label1'>Product Category</label><br/>
            <input type="text" id="fname" name="fname" value={Data.Pcategory} className='input1'
            onChange={(e)=>{setData({...Data,Pcategory:e.target.value})}}/><br/>
            <label for="lname" className='label1'>Product Discreption</label><br/>


            <textarea rows={4} cols={2} className="t" value={Data.Pdescription} placeholder="text here"
            onChange={(e)=>{setData({...Data,Pdescription:e.target.value})}}></textarea><br/>
            <button className='button1' onClick={(e)=>{
              e.preventDefault();
              fetch('https://630ba5b883986f74a7b497e5.mockapi.io/Product/'+param.id,
              {
                method:"PUT",
                body:JSON.stringify(Data),
                headers:{"Content-Type":"application/json"}
              }
              ).then(()=>{
                navigate("/All_item/Detail/"+param.id);
              });
             
              
            }}>EDIT ITEM</button>
            </div>
        </form>


        </div>
      
   
  








      
    </div>
    </div>
  )
}
