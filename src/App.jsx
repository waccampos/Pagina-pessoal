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
              Olá meu nome e Willams Campos e Sou um jovem entusiasta da tecnologia em busca de oportunidades para contribuir e aprender no mundo profissional. Minha paixão pela tecnologia me motiva a enfrentar desafios e aprimorar minhas habilidades constantemente. Sou colaborativo, dedicado a trabalhar em equipe e estou sempre disposto a superar expectativas. Acredito que o aprendizado contínuo e a disposição para compartilhar conhecimento são fundamentais para o crescimento na área de tecnologia. Estou ansioso para fazer a diferença e crescer profissionalmente.
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
              text="utilizei o react na criação de dois projetos o click-pointer e a minha pagina pessoal e a tecnologia que mais estou estudando no momento"
            >
              <BiLogoReact size={170}/>
            </Skill>

            <Skill
              title="PYTHON"
              text="
                Utilizei Python exclusivamente para o desenvolvimento do back-end, 
                onde empreguei o framework Django para criar uma API para um mercado ficticio.
              "
            >
              <BiLogoPython size={170}/>
            </Skill>

            <Skill 
              title="REACT NATIVE"
              text="
                Utilizei o React Native para criar um aplicativo de lista de afazeres que consumiu uma API também criada por mim em JavaScript.
              ">
              <BiLogoReact size={170}/>
            </Skill>

            <Skill
              title={"JAVASCRIPT"}
              text="
                Assim como todas as outras linguagens, tive contato principalmente em contextos acadêmicos. 
                Nessa linguagem, trabalhei em ambas as camadas, tanto no back-end com o Express para criar uma API simples, 
                quanto no front-end com HTML e CSS. Atualmente, estou utilizando com React.js e React Native.
                "
              >
              <BiLogoJavascript size={170}/>
            </Skill>

            <Skill
              title="HTML"
              text="
              Experiência sólida em criar estruturas acessíveis e semânticas com HTML,
              com foco em layouts responsivos. Buscando constantemente melhorias nas habilidades HTML."
            >
              <BiLogoHtml5 size={170}/>
            </Skill>


            <Skill
              title={"CSS"}
              text="
              Ampla experiência em aplicar estilos, incluindo cores, fontes e posicionamento de elementos, para criar designs atraentes e responsivos. 
              Atualmente, também estou estudando SCSS para expandir ainda mais minhas habilidades.
              "
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
            text={"Este é um projeto de API desenvolvido em Python usando o framework Django para gestão de estoque. A API permite cadastrar, atualizar, excluir e listar produtos em estoque, além de realizar vendas e compras. Também inclui funcionalidades de cadastro e autenticação de usuários e funcionários, bem como controle de folha de ponto."}
          >
            <BiLogoPython size={30}/>
            <SiSqlite size={30}/>
          </ItemPortifolio>

          <ItemPortifolio
          link={"https://github.com/waccampos/Pagina-pessoal"}
            title={"Pagina pessoal"}
            text={"Este é um projeto React que representa minha página pessoal e profissional. Aqui você encontrará informações sobre mim, meu portfólio e como entrar em contato."}
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
          link={"https://github.com/waccampos/click-point"}
            title={"click pointer"}
            text={"Este projeto é uma solução para o desafio onde o objetivo é criar uma aplicação que permite ao usuário adicionar círculos clicando em qualquer lugar da página, com as funcionalidades de desfazer (undo) e refazer (redo)."}
          >
            <BiLogoReact size={30}/>
            
          </ItemPortifolio>

          <ItemPortifolio
            title={"em breve"}
            text={"----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"}
          >
            <BiLogoReact size={30}/>
            <BiLogoJavascript size={30}/>
            <SiMysql size={30}/>
          </ItemPortifolio>

          <ItemPortifolio
            title={"em breve"}
            text={"----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"}
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

