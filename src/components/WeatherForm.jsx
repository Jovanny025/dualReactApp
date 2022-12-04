import React from 'react'

const WeatherForm = () => {
  return (
    <form>
        <input type="text" placeholder='digite la ciudad'/>
        <button className='submit'>Enviar</button>
    </form>
  )
}

export default WeatherForm