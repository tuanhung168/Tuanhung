import React from 'react'

function TextIcon() {
  return (
    <div>
    <div className="text-icon">
         <input className="text-area" placeholder=" type review here...">
          </input> 
          <div className="icon">
            <p>0 left</p>
            <button>PUBLISH<i class="fa-solid fa-arrow-up"></i></button>
          </div>
      </div>
    </div>
  )
}

export default TextIcon