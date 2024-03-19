import { useEffect, useState } from 'react'
import './App.css'
import { Repos } from './components/Repos';

function Menu() {
  const [texto,setTexto] = useState('')

  return (
    <>
      <div id='conteiner'>
          <h1>Github Search</h1>
          <input  onChange={() => {
            let inpTexto = document.getElementById('input-text')
            setTexto(inpTexto.value)
          } } id='input-text' type="text"/>
      </div>
      <Repos texto={texto}/>
    </>
  )
}

export default Menu