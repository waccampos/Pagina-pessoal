import React from 'react'
import './styles/main.scss'
import BotoesHeader from './components/buttons'

export default function App() {
  

  return (
    <main className='container'>
      
      <header className='container-header'>
        <div className='logo'>
          <h2>WCampos<span>.</span></h2>
        </div>
        
        <BotoesHeader/>
        
      </header>
      <section className='container-sobre-mim' id='sobre-mim'>
        <h1>sobre mim</h1>
        <br /><br />
      </section>
      
    </main>
  )
}

