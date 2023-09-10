import React,{ useState, useEffect } from 'react'

import './styles/main.scss'
import './styles/globals.scss'

import BotoesHeader from './components/buttons'
import BubbleSocial from './components/bubble-social'
import ButtonDownload from './components/button-download'
import TitleSessao from './components/title-sessao'
import BarraProgresso from './components/BarraProgresso'

import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineArrowUp } from "react-icons/ai";
import { MdOutlineMailOutline ,MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {BsGithub, BsWhatsapp} from "react-icons/bs"



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

      <div className='container-header'>
        
          <div className='logo'>
            <h2>WCampos<span>.</span></h2>
          </div>

        <BotoesHeader 
        link1={"#sobremim"}
        link2={"#"}
        link3={"#"}
        link4={"#"}
        />

      </div>

      <div className='container-intro'>

        <div className='container-name' >
          <h1>Olá, Sou <span>Willams Campos</span>,<br /></h1>
          <h2>e sou Estudante de Ánalise e Desenvolvimento de Sistemas.</h2>
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
        <a href="#sobremim">
          <div className='botao-baixar'>
              <MdOutlineKeyboardDoubleArrowDown size={50}/>
          </div>
        </a>

      </div>

      <div className='container-sobremim'>
        <div className='conteudo-sobremim'>
          <section id='sobremim'>
          <TitleSessao title="Sobre mim"/>
          <br />
          
          <div>
            <p>
              olá, meu nome e willams campos Sou um jovem iniciante no mercado de trabalho e amante da tecnologia, busco fazer parte de uma empresa para que eu possa contribuir e aprender cada vez mais. Tenho como objetivo aperfeiçoar minhas skills técnicas para ajudar a equipe nos trabalhos cotidianos
            </p>
          <div className='container-barra-progresso'>
            <BarraProgresso 
            link1={"#sobremim"}
            link2={""} 
            link3={""} 
            link4={""} 
            progress={1}
            />
            </div>
          </div>
          </section>
        </div>
      </div>
    </main>
  )
}

