import React, { useState } from 'react';
import './style.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function MenuHeader({ link1, link2, link3, link4 }) {
  const [ativado, setAtivado] = useState(false);


  return (
    <div className="container-menu">
      <GiHamburgerMenu
        size={30}
        className="icon-hamburguer"
        onClick={() => {
            setAtivado(!ativado)}}
      />

      <nav className={`menu ${ativado ? '' : 'ativado'}`}>
        <a href="#" className="link-sessao" onClick={() => {
            setAtivado(!ativado)}}>
          Home
        </a>
        <a href={link1} className="link-sessao" onClick={() => {
            setAtivado(!ativado)}}>
          Sobre mim
        </a>
        <a href={link2} className="link-sessao" onClick={() => {
            setAtivado(!ativado)}}>
          Skills
        </a>
        <a href={link3} className="link-sessao" onClick={() => {
            setAtivado(!ativado)}}>
          Portifolio
        </a>
        <a href={link4} className="link-sessao" onClick={() => {
            setAtivado(!ativado)}}>
          Contato
        </a>
      </nav>
    </div>
  );
}
