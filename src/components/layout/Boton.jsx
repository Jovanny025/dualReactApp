import React from 'react'

const Boton = ({children,funcion}) => {
  return (
    <button 
    className='
    p-2 
    py-1
    bg-emerald-800 border 
    text-white
    text-xl
    rounded'
     onClick={funcion}>{children}</button>
  )
}

export default Boton