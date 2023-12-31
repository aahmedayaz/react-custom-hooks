import React, { useState } from 'react'

const useToggle = (boolean) => {

    let [toggle , setToggle] = useState(boolean)

    let HandleToggle = () => {
        setToggle(prev => !prev)
    }

    let trueToggle = () =>{
        setToggle(true)
    }

    let falseToggle = () =>{
        setToggle(false)
    }

    return [toggle , HandleToggle , trueToggle , falseToggle]
}

export default useToggle