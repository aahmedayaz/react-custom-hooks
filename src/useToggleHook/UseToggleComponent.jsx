import React from 'react'
import useToggle from './useToggle'

const UseToggleComponent = () => {

  let [toggle , setToggle] = useToggle(true)

  return (
    <>
      <div>{toggle.toString()}</div>
      <button onClick={setToggle}>Toggle</button>
      <button onClick={() => setToggle(true)}>Make it true</button>
      <button onClick={() => setToggle(false)}>Make it false</button>
    </>
  )
}

export default UseToggleComponent