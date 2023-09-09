import React,{ useState, useEffect } from 'react'

import './styles/main.scss'
import './styles/config.scss'

import BotoesHeader from './components/buttons'
import BubbleSocial from './components/bubble-social'

import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineArrowUp } from "react-icons/ai";
import { MdOutlineMailOutline ,MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {BsGithub, BsWhatsapp} from "react-icons/bs"


import ButtonDownload from './components/button-download'


export default function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className='container'>
      <a href="#">
        <div className={`elemento ${isVisible ? 'aparecer' : ''}`}>
          <AiOutlineArrowUp size={25} />
        </div>
      </a>

      <header className='container-header'>
        
          <div className='logo'>
            <h2>WCampos<span>.</span></h2>
          </div>

        <BotoesHeader/>

      </header>

      <div className='container-intro'>
      <div className='container-name' >
        <h1>Olá, Sou <span>Willams Campos</span>,<br /></h1>
        <h2>e sou Estudante de Analise e Desenvolvimento de Sistemas.</h2>
      </div>

      <div className='container-bubbles'>
        <BubbleSocial url={"https://www.linkedin.com/in/willams-campos-05aaa11bb/"} >
          <ImLinkedin2 size={25}/>
        </BubbleSocial>

        <BubbleSocial url={"https://github.com/waccampos"} >
          <BsGithub size={25}/>
        </BubbleSocial>

        <BubbleSocial url={"https://wa.me/+558198864032"} >
          <BsWhatsapp size={25}/>
        </BubbleSocial>
        
        <BubbleSocial url={"https://mailto:willamscampos.olinda@hotmail.com"} >
          <MdOutlineMailOutline size={25}/>
        </BubbleSocial>

      </div>
      <div className='container-cv'>
          <ButtonDownload/>
      </div>
      <a href="#">
        <div className='botao-baixar'>
            <MdOutlineKeyboardDoubleArrowDown size={50}/>
        </div>
        </a>

      </div>
    </main>
  )
}

