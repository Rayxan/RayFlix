import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo1.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="RayFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
