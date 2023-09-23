import React,{ useState, useEffect } from 'react'

import './styles/main.scss'
import './styles/globals.scss'

import MenuHeader from './components/MenuHeader'
import BubbleSocial from './components/BubbleSocial'
import ButtonDownload from './components/ButtonDownload'
import TitleSessao from './components/TitleSessao'
import BarraProgresso from './components/BarraProgresso'
import Skill from './components/Skill'
import ItemPortifolio from './components/ItemPortifolio'
import ContatoEmail from './components/ContatoEmail'

import { ImLinkedin2 } from "react-icons/im";
import { BiLogoReact ,BiLogoPython,BiLogoJavascript,BiLogoHtml5, BiLogoCss3} from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { MdOutlineMailOutline ,MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {BsGithub, BsWhatsapp} from "react-icons/bs"
import {SiMysql,SiSqlite} from "react-icons/si"





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
      <TitleSessao title="Sobre mim"/>
        <div className='conteudo-sobremim'>

            <p>
              olá, meu nome e willams campos Sou um jovem iniciante no mercado de trabalho e amante da tecnologia, busco fazer parte de uma empresa para que eu possa contribuir e aprender cada vez mais. Tenho como objetivo aperfeiçoar minhas skills técnicas para ajudar a equipe nos trabalhos cotidianos
            </p>
          
            
            
            <BarraProgresso 
              link1="#sobremim"
              link2="#skills"
              link3="#portifolio"
              link4="#contato"
              progress={1}
            />
        </div>
        
        
      </section>

      
        <TitleSessao title="Skills" id='skills'/>
        <section className='container-skills'>
        
          <div className='skills'>
            <Skill
              title="REACT JS"
              text="fcasgg"
            >
              <BiLogoReact size={170}/>
            </Skill>

            <Skill
              title="PYTHON"
              text="
                Usei python apenas Para back-end nessa oportunidade utilizei o framework django para fazer
                uma api que emule um mercado.
              "
            >
              <BiLogoPython size={170}/>
            </Skill>

            <Skill 
              title="REACT NATIVE"
              text="fblablablalbalblalblalssdassssssss">
              <BiLogoReact size={170}/>
            </Skill>

            <Skill
              title={"JAVASCRIPT"}
              text="
              Assim como todas as outras linguagens só tive contato academico,
              nessa linguagem trabalhei tanto o back quanto o front,
              no back-end usei o express para fazer uma api simples 
              ja no front-end utizizei com css,
              html e hoje em dia utilizo com react js e react-native.
              "
              >
              <BiLogoJavascript size={170}/>
            </Skill>

            <Skill
              title={"HTML"}
              text="fblablablalbalblalblalssdassssssss"
              >
              <BiLogoHtml5 size={170}/>
            </Skill>

            <Skill
              title={"CSS"}
              text="fblablablalbalblalblalssdassssssss"
              >
              <BiLogoCss3 size={170}/>
            </Skill>

          </div>
            <BarraProgresso 
              link1="#sobremim"
              link2="#skills"
              link3="#portifolio"
              link4="#contato"
              progress={2}
            />
        
      </section>


      <TitleSessao title="Portifolio" id="portifolio"/>
      <section className='container-portifolio'  style={{}}>
        <div className="item-portifolio">
          <ItemPortifolio
          link={"https://github.com/waccampos/api-em-py"}
            title={"Api django"}
            text={"okdfos akdoaskd okassdddddd ddd dddddd ddddd sddddd dddd dddddddddd dddd dddddd dddddddd dddddd ddddd ddddd dddd dd dddddd ddddddd ddd dddddddd dddddddd sdddddddd dddd ddddd d ddddddddd asdsad asd asd as das dasd sa dasdsadasd sad asdsadsad sadasds adasdsssssssssss sdaaaaaaaaaa"}
          >
            <BiLogoPython size={30}/>
            <SiSqlite size={30}/>
          </ItemPortifolio>

          <ItemPortifolio
          link={"https://github.com/waccampos/app-tarefas-mobile-fullstack"}
            title={"Pagina pessoal"}
            text={"okdfos akdoaskd okassdddddd ddd dddddd ddddd sddddd dddd dddddddddd dddd dddddd dddddddd dddddd ddddd ddddd dddd dd dddddd ddddddd ddd dddddddd dddddddd sdddddddd dddd ddddd d ddddddddd asdsad asd asd as das dasd sa dasdsadasd sad asdsadsad sadasds adasdsssssssssss sdaaaaaaaaaa"}
          >
            <BiLogoReact size={30}/>
            
          </ItemPortifolio>
          
          <ItemPortifolio
          link={"https://github.com/waccampos/app-tarefas-mobile-fullstack"}
            title={"projeto mobile fullstack"}
            text={"consiste em um app que ajude a melhorar seu dia a dia. O app conta com uma tela para marcar compromissos na agenda do próprio app. Em outra tela, existe um bloco de notas para salvar o texto digitado no banco de dados. a segunda parte do app ainda esta sendo cuntruida que e a parte de integração com chat gpt."}
          >
            <BiLogoReact size={30}/>
            <BiLogoJavascript size={30}/>
            <SiMysql size={30}/>
          </ItemPortifolio>

          <ItemPortifolio
          link={"#"}
            title={"pagina pessoal"}
            text={"okdfos akdoaskd okassdddddd ddd dddddd ddddd sddddd dddd dddddddddd dddd dddddd dddddddd dddddd ddddd ddddd dddd dd dddddd ddddddd ddd dddddddd dddddddd sdddddddd dddd ddddd d ddddddddd asdsad asd asd as das dasd sa dasdsadasd sad asdsadsad sadasds adasdsssssssssss sdaaaaaaaaaa"}
          >
            <BiLogoReact size={30}/>
            <BiLogoJavascript size={30}/>
            <SiMysql size={30}/>
          </ItemPortifolio>

          <ItemPortifolio
          link={"#"}
            title={"click pointer"}
            text={"Este projeto é uma solução para o desafio onde o objetivo é criar uma aplicação que permite ao usuário adicionar círculos clicando em qualquer lugar da página, com as funcionalidades de desfazer (undo) e refazer (redo)."}
          >
            <BiLogoReact size={30}/>
            
          </ItemPortifolio>

          <ItemPortifolio
          link={"#"}
            title={"pagina pessoal"}
            text={"okdfos akdoaskd okassdddddd ddd dddddd ddddd sddddd dddd dddddddddd dddd dddddd dddddddd dddddd ddddd ddddd dddd dd dddddd ddddddd ddd dddddddd dddddddd sdddddddd dddd ddddd d ddddddddd asdsad asd asd as das dasd sa dasdsadasd sad asdsadsad sadasds adasdsssssssssss sdaaaaaaaaaa"}
          >
            <BiLogoReact size={30}/>
            <BiLogoJavascript size={30}/>
            <SiMysql size={30}/>
          </ItemPortifolio>
          </div>

          <BarraProgresso 
                link1="#sobremim"
                link2="#skills"
                link3="#portifolio"
                link4="#contato"
                progress={3}
              />
        
      </section>

      <TitleSessao title="Contato"/>
      <section className='container-contato' id='contato'>
        <div></div>
        
        <ContatoEmail/>

        <BarraProgresso
          link1="#sobremim"
          link2="#skills"
          link3="#portifolio"
          link4="#contato"
          progress={4}
        
        />
      </section>
      



    </main>
  )
}

