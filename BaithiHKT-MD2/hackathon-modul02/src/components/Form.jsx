import React from 'react'
import { useState } from 'react';

function Form() {
    //  const [divColor, setDivColor] = useState("black");
    //  const handleClick = () => {
    //     setDivColor(divColor === "black" ? " rgb(131, 173, 173)" : "black")
    //  }
  return (
    <div>
        <div className='title'>
          <h1>Reviews TA BÉC CỌP!!! <i class="fa-solid fa-comment-medical"></i></h1>
          <button><h1><i class="fa-solid fa-wand-magic-sparkles"></i></h1></button>
          </div>
        <form>
          <input placeholder="  Search here..."></input>
          <button>Click</button>
        </form>
    </div>
  )
}

export default Form