import { useState } from 'react'
import './App.css'
import {useRoutes,Link} from 'react-router-dom'
import pokeball from './assets/pokeball.png'


function App() {
 

  return (
    <>
      <div className='main-container'>
        <img src={pokeball}/>
        <div className='Project'>
          <h1>Welcome to Pokemon Crew Mate Creator</h1>
          <h3>Log the pokemons you found</h3>
        </div>
      </div>
      
    </>
  )
}

export default App
