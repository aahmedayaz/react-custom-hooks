import React from 'react'
import useToggle from './useToggle'

const UseToggleComponent = () => {

  let [toggle , setToggle , trueToggle , falseToggle] = useToggle(true)

  return (
    <>
      <div>{toggle.toString()}</div>
      <button onClick={() => setToggle()}>Toggle</button>
      <button onClick={() => trueToggle()}>Make it true</button>
      <button onClick={() => falseToggle()}>Make it false</button>
    </>
  )
}

export default UseToggleComponent