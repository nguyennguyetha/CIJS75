import React from 'react'

export const Item = (props) => {
  console.log(props);
  return (
  <>
  <div className='item'>
   <input type= 'radio'/>
   <label>{props}</label>
   </div>

  </>
  )
}
