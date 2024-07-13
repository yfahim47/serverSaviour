import React from 'react'

function Red({name}) {
  return (
    <div style={{height:'10px', width:'40px', backgroundColor:'red', marginBottom:'1px', marginTop:'1px', borderRadius:'3px',
    display:'flex',flexDirection:"column",justifyContent:'center', alignItems:'center'}}>
      <text style={{
        fontFamily:"Arial",
        color:'white',
        fontSize:"6px"
      }}>
        {name}
      </text>
    </div>
  )
}

export default Red
