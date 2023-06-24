import React from 'react'

const Input = ({color,setColor,handleSubmit}) => {
  return (
    <form onClick={handleSubmit}>
      <Input
      autoFocus
      type="text"
      value={color}
      placeholder="#f15025"
      onChange={(e)=>setColor(e.target.value)}/>
      <button className='btn'type="submit">
        Submit
      </button>
    </form>
  )
}

export default Input
