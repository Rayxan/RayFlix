import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          #ImersaoAlura
        </a>
      </p>
      <p>
        By:
        <a href="https://github.com/Rayxan"> 
          Raylan Sales
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
