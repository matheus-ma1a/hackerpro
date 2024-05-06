import './App.css'
import styled from 'styled-components'
import '@splidejs/react-splide/css';
import ProgressBar from './RandomProgressBar';
import { useEffect, useState } from 'react';
import { BsTelegram } from 'react-icons/bs';
import { SiCircuitverse } from "react-icons/si";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Header from './components/Header';
import BannerSlide from './components/BannersSlider';
import PixSlider from './components/PixSlider';
import SectionSejMenbro from './SectionSejaMenbro';
import modalBreve from './components/modalBreve';



const FooterS = styled.ul`
  
  background-color: #262626;
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 0.6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  gap: 3rem;
  border-top: 1px solid #e1e1e11c;

  
  li{
    list-style: none;
    font-size: 0.7rem;
    font-weight: lighter;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }

  @media (max-width: 900px) {
    width: 100%;
  }
  
`

const Section1 = styled.div`
  color: white;
  max-width: 600px;
  padding-bottom: 5rem;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 2rem;
  
  a{
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.2rem;
    color: #fff;
    text-decoration: none;
    width: 160px;
    img{
      border-radius: 8px;
      width: 100%;
      height: 70%;
      
    }
    
  }
  
  @media (max-width: 667px) { 
      
    margin: 0 1rem  ;  

    a{
      width: 130px;
    }


  }

`

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
`

function App() {

  function gerarNumeroAleatorio(max, min) {

    const numeroAleatorio = Math.random();
    const numeroNoIntervalo = numeroAleatorio * (max - min) + min;
    const numeroFinal = Math.floor(numeroNoIntervalo);

    return numeroFinal;
  }

  const hendlemodal = ()=>{
    return(
      <modalBreve/>
    )
  }

  const games = [
    {
      jogo: 'imgJogos/auto_roulettepb.webp',
      porcentagem: gerarNumeroAleatorio(95, 98),
      pro: true

    },
    {
      jogo: 'imgJogos/aviatorpb.jpg',
      porcentagem: gerarNumeroAleatorio(95, 98),
      link: '/aviator',
      pro: true
    },
    ,
    {
      jogo: 'imgJogos/bacdo.jpg',
      porcentagem: gerarNumeroAleatorio(90, 70),
      link: '#',

    },
    {
      jogo: 'imgJogos/crash.jpg',
      porcentagem: gerarNumeroAleatorio(90, 70),
      link: '#',

    },
    {
      jogo: 'imgJogos/double.png',
      porcentagem: gerarNumeroAleatorio(30, 20),
      link: '#',

    },
    {
      jogo: 'imgJogos/dragon-tiger-luck.png',
      porcentagem: gerarNumeroAleatorio(90, 70),
      link: '#',

    },
    {
      jogo: 'imgJogos/football_studio.jpg',
      porcentagem: gerarNumeroAleatorio(90, 70),
      link: '#',

    },
    {
      jogo: 'imgJogos/fortune_dragon.png',
      porcentagem: gerarNumeroAleatorio(54, 40),
      link: '#',

    },
    {
      jogo: 'imgJogos/fortune-mouse.jpg',
      porcentagem: gerarNumeroAleatorio(70, 60),
      link: '/Rato',

    },
    {
      jogo: 'imgJogos/fortune-ox.jpg',
      porcentagem: gerarNumeroAleatorio(54, 40),
      link: '/touro',

    },
    {
      jogo: 'imgJogos/fortune-rabbit.jpg',
      porcentagem: gerarNumeroAleatorio(70, 60),
      link: '/coelho',

    },
    {
      jogo: 'imgJogos/fortune.jpg',
      porcentagem: gerarNumeroAleatorio(30, 20),
      link: '/tiger',

    },
    {
      jogo: 'imgJogos/magnify-man.png',
      porcentagem: gerarNumeroAleatorio(70, 60),
      link: '#',

    },
    {
      jogo: 'imgJogos/minespb.webp',
      porcentagem: gerarNumeroAleatorio(54, 40),
      link: '/mines',
      pro: true

    },
    {
      jogo: 'imgJogos/ninja-crash.png',
      porcentagem: gerarNumeroAleatorio(70, 60),
      link: '/crash',

    },
    {
      jogo: 'imgJogos/penalty.jpg',
      porcentagem: gerarNumeroAleatorio(54, 40),
      link: '#',

    },
    {
      jogo: 'imgJogos/prosperityLion.png',
      porcentagem: gerarNumeroAleatorio(54, 40),
      link: '#',

    },
    {
      jogo: 'imgJogos/roelta-xxxtremepb.webp',
      porcentagem: gerarNumeroAleatorio(70, 60),
      link: '#',
      pro: true

    },
    {
      jogo: 'imgJogos/roleta-brasileirapb.webp',
      porcentagem: gerarNumeroAleatorio(54, 40),
      link: '#',
      pro: true

    },
    {
      jogo: 'imgJogos/roleta-crazy-time.jpg',
      porcentagem: gerarNumeroAleatorio(70, 60),
      link: '#',

    },
    {
      jogo: 'imgJogos/spaceman.jpg',
      porcentagem: gerarNumeroAleatorio(54, 40),
      link: '#',

    },
    {
      jogo: 'imgJogos/sword.jpg',
      porcentagem: gerarNumeroAleatorio(70, 60),
      link: '#',

    },
    {
      jogo: 'imgJogos/thimbles.png',
      porcentagem: gerarNumeroAleatorio(54, 40),
      link: '#',

    },

  ]

  return (
    <Main>

      <Header />

      <PixSlider />

      <BannerSlide />

      <SectionSejMenbro />

      <p className='jogosDisponiveis' >Jogos Disponiveis</p>

      <Section1>
        {

          games.map((games, index) => {
            
            return (
              
              <Link to={games.pro ? '#' : games.link}>
                <a href='https://boombets.com/affiliates/?btag=1660769_l292958' key={index} >
                  <img src={games.jogo} alt="" />
                  <ProgressBar progress={games.porcentagem} />
                </a>
              </Link>
            )
          })}
      </Section1>

      <FooterS >
        <li>
          <RiMoneyDollarCircleFill style={{ fontSize: '2rem' }} />

          Minutos
        </li>

      </FooterS>

    </Main>
  )
}

export default App
