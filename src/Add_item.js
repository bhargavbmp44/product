import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Add_item() {

  const navigate=useNavigate();
  const [Data,setData]=useState({});
  return (
    <div>
      <div className='image1'>

        <div className='form1'>

        <form className='form1'>
          <div className='padding1'>
           <label for="lname" className='label1'>Product Name</label><br/>
            <input type="text" id="fname" name="fname" className='input1'
            onChange={(e)=>{
             
              setData({...Data,Pname:e.target.value});
              
              }}/><br/>


            <label for="lname" className='label1'>Product Image</label><br/>
            <input type="text" id="lname" name="lname" className='input1'
            onChange={(e)=>{setData({...Data,Pimage:e.target.value});
            }}/><br/>


            <label for="lname" className='label1'>Product Price</label><br/>
            <input type="text" id="fname" name="fname" className='input1'
            onChange={(e)=>{setData({...Data,Pprice:e.target.value})}}/><br/>


            <label for="lname" className='label1'>Product Category</label><br/>
            <input type="text" id="fname" name="fname" className='input1'
            onChange={(e)=>{setData({...Data,Pcategory:e.target.value})}}/><br/>
            <label for="lname" className='label1'>Product Discreption</label><br/>


            <textarea rows={4} cols={2} className="t" placeholder="text here"
            onChange={(e)=>{setData({...Data,Pdescription:e.target.value})}}></textarea><br/>
            <button className='button1' onClick={(e)=>{
              e.preventDefault();
             
              fetch('https://630ba5b883986f74a7b497e5.mockapi.io/Product',
              {
                method:"POST",
                body:JSON.stringify(Data),
                headers:{"Content-Type":"application/json"}
              }
              ).then(()=>{
                navigate("/All_item");
              });
              
            }}>ADD ITEM</button>
            </div>
        </form>


        </div>
      
   
  








      
    </div>
    </div>
  )
}
