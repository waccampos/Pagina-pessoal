import React,{ useState, useEffect } from 'react'

import './styles/main.scss'
import './styles/globals.scss'


import MenuHeader from './components/MenuHeader'
import BubbleSocial from './components/BubbleSocial'
import ButtonDownload from './components/ButtonDownload'
import TitleSessao from './components/TitleSessao'
import BarraProgresso from './components/BarraProgresso'

import { ImLinkedin2 } from "react-icons/im";
import { BiLogoReact ,BiLogoPython,BiLogoJavascript,BiLogoHtml5, BiLogoCss3} from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { MdOutlineMailOutline ,MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {BsGithub, BsWhatsapp} from "react-icons/bs"

import Skill from './components/Skill'



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

        <MenuHeader 
        link1={"#sobremim"}
        link2={"#skills"}
        link3={"#portifolio"}
        link4={"#contato"}

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

      <section className='container-sobremim' id='sobremim'>
        <div className='conteudo-sobremim'>
          <TitleSessao title="Sobre mim"/>
          
          <div>
            <p>
              olá, meu nome e willams campos Sou um jovem iniciante no mercado de trabalho e amante da tecnologia, busco fazer parte de uma empresa para que eu possa contribuir e aprender cada vez mais. Tenho como objetivo aperfeiçoar minhas skills técnicas para ajudar a equipe nos trabalhos cotidianos
            </p>
          <div className='container-barra-progresso'>
            <BarraProgresso 
              link1="#sobremim"
              link2="#skills"
              link3="#portifolio"
              link4="#contato"
              progress={1}
            />
            </div>
          </div>
        </div>
      </section>

      <section className='container-skills' id='skills'>
        <TitleSessao title="Skills" />
        
        <div className='conteudo-skills'>
          <div className='skills'>
            <Skill
            logo={<BiLogoReact size={170}/>}
            title={"REACT JS"}
            text="fcasgg"
            />
            <Skill
            logo={<BiLogoPython size={170}/>}
            title={"PYTHON"}
            text="fblablablalbalblalblalssdassssssss"
            />
            <Skill
            logo={<BiLogoReact size={170}/>}
            title={"REACT NATIVE"}
            text="fblablablalbalblalblalssdassssssss"
            />
            <Skill
            logo={<BiLogoJavascript size={170}/>}
            title={"JAVASCRIPT"}
            text="fblablablalbalblalblalssdassssssss"
            />
            <Skill
            logo={<BiLogoHtml5 size={170}/>}
            title={"HTML"}
            text="fblablablalbalblalblalssdassssssss"
            />
            <Skill
            logo={<BiLogoCss3 size={170}/>}
            title={"CSS"}
            text="fblablablalbalblalblalssdassssssss"
            />
          </div>
            <BarraProgresso 
              link1="#sobremim"
              link2="#skills"
              link3="#portifolio"
              link4="#contato"
              progress={2}
            />
        </div>
      </section>

      <section className='container-portifolio' id='portifolio'>
      

      </section>
      <section className='container-portifolio' id='contato'>
      

      </section>
      



    </main>
  )
}

