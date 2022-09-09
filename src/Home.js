import React from 'react'

export default function Home() {


  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 5000);


  return (
    <div>
              
              <div class="slider">
      <div class="slides">
        
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>
        

        <div class="slide first">
          <img src="https://image01.realme.net/general/20220905/1662350708807.jpg.webp" alt=""/>
        </div>
        <div class="slide">
       
          <img src=" https://i02.appmifile.com/674_operator_in/07/09/2022/8482991b3a06a6e38f04bb504415a6e1.jpg" alt=""/>
        </div>
        <div class="slide">
          <img src="https://i02.appmifile.com/980_operator_in/07/09/2022/154f3cd4638d9bbac6fb24c5256d77e5.jpg" alt=""/>
        </div>
        
        <div class="slide">
          <img src="https://image01.realme.net/general/20220906/1662445820885.jpg.webp" alt=""/>
        </div>
        
        {/* <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
        </div> */}
       
      </div>
     
      {/* <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
      </div>
       */}
    </div>
   
    </div> 
  )
}
