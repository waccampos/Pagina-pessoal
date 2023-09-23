import React, { useState } from 'react';
import './style.scss';
import StyledInput from './Input.Style';
import axios, { Axios } from 'axios';

export default function ContatoEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [conteudo, setConteudo] = useState('');

  function sendEmail(e){
    e.preventDefault();

    var data = {
      service_id: import.meta.env.VITE_ID_EMAILJS,
      template_id: import.meta.env.VITE_TEMPLATEID_EMAILJS,
      user_id: import.meta.env.VITE_PUBLIC_KEY_EMAILJS,
      template_params : {
        name : name,
        email: email,
        assunto: assunto,
        conteudo: conteudo
      }
    }
    
    if(name === ''){
      alert("o campo nome esta vazio")
      return
    }else if(email === ''){
      alert("o campo email esta vazio")
      return
    }else if(assunto === ''){
      alert("o campo assunto esta vazio")
    }
    
    axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
  .then((response) => {
    setName('');
    setEmail('');
    setAssunto('');
    setConteudo('');
    console.log(response.status)
    alert('Seu email foi enviado!');
  })
  .catch((error) => {
    console.error(error);
    console.log(response.status)
  });


}

  return (
    <div className="container-form">
      <form onSubmit={sendEmail}>
        <h2 className="title-contato">Entre em contato</h2>
        <div className="container-inputs">
          <StyledInput
            placeholder="digite seu nome"
            type="text"
            value={name} // Adicione esta propriedade "value"
            onChange={(e) => setName(e.target.value)}
          />

          <StyledInput
            placeholder="digite seu email"
            type="email"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />

          <StyledInput
            placeholder="digite o assunto"
            type="text"
            
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)} 
          />
        </div>
        <h3>conteúdo</h3>
        <textarea
          name=""
          id=""
          rows="10"
          className="areatexto"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
        ></textarea>

        <div className="botoes-form">
          <button type="submit">enviar</button>

          <button type="reset" onClick={(e) => {
            setEmail('');
            setAssunto('');
            setName('');
            setConteudo('');
          }}>limpar</button>
        </div>
      </form>
    </div>
  );
}
