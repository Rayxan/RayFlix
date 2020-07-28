import React from 'react';
import Menu from './components/Menu/index.js';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App(){
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Samurai champloo, uma obra que vai além dos temas propostos."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel  
        category={dadosIniciais.categorias[1]}
      />

      <Carousel  
        category={dadosIniciais.categorias[2]}
      />

      <Carousel  
        category={dadosIniciais.categorias[3]}
      />

    </div>
  );
}

export default App;