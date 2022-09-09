import React from 'react'
import { Link } from 'react-router-dom'



export default function Header() {

    
      
  return (
    <div>
        <div className="header">
        <a href="#default" class="logo"><em>BONTIQUE</em></a>
          <div class="header-right">
              <Link to="./"><b>HOME</b></Link>
              <Link to="./All_item"><b>ALL ITEMS</b></Link>
              <Link to="./Add_item"><b>ADD ITEMS</b></Link>
              
          </div>
        </div>
        
    </div>
  )
}
