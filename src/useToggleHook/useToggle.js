import React, { useState } from 'react'

const useToggle = (boolean) => {

    let [toggle , setToggle] = useState(boolean)

    let HandleToggle = (bool) => {
        if (bool !== undefined) {
          setToggle(bool);
        } else {
          setToggle(prev => !prev);
        }
      };
      

    return [toggle , HandleToggle ]
}

export default useToggle