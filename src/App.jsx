import './App.css'
import styled from 'styled-components'
import '@splidejs/react-splide/css';
import ProgressBar from './RandomProgressBar';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import BannerSlide from './components/BannersSlider';
import PixSlider from './components/PixSlider';
import SectionSejMenbro from './SectionSejaMenbro';



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
  gap: 0.1rem 1rem;
  background-color: ${props => props.bgc};
  padding: 1rem;
  
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
      
    margin: ${props => props.mg} 1rem  0 ;  

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


  .jogosDisponiveis{
    margin: 3rem;
  }

`

function gerarNumeroAleatorio(max, min) {

  const numeroAleatorio = Math.random();
  const numeroNoIntervalo = numeroAleatorio * (max - min) + min;
  const numeroFinal = Math.floor(numeroNoIntervalo);

  return numeroFinal;
}

const games = [
  {
    jogo: 'imgJogos/auto_roulettepb.webp',
    pro: true,
    porcentagem: gerarNumeroAleatorio(90, 98),
    id: 1,
    link: '#'
  },
  {
    jogo: 'imgJogos/aviator.jpg',
    pro: false,
    porcentagem: gerarNumeroAleatorio(90, 98),
    id: 2,
    link: '/aviator',
  },

  {
    jogo: 'imgJogos/fortunepb.webp',
    pro: true,
    porcentagem: gerarNumeroAleatorio(90, 98),
    id: 3,
    link: '#',
  },

  {
    jogo: 'imgJogos/football_studiopb.jpg',
    pro: true,
    porcentagem: gerarNumeroAleatorio(90, 98),
    id: 4,
    link: '#',
  },

  {
    jogo: 'imgJogos/penaltypb.jpg',
    pro: true,
    porcentagem: gerarNumeroAleatorio(90, 98),
    id: 5,
    link: '#',
  },
  ,
  {
    jogo: 'imgJogos/bacdo.jpg',
    pro: false,
    porcentagem: gerarNumeroAleatorio(90, 98),
    id: 6,
    link: '/bacbo',

  },
  {
    jogo: 'imgJogos/ninja-crash.png',
    pro: false,
    porcentagem: gerarNumeroAleatorio(90, 98),
    id: 7,
    link: '/crash',

  },
  {
    jogo: 'imgJogos/spacemanpb.jpg',
    pro: true,
    porcentagem: gerarNumeroAleatorio(90, 98),
    id: 8,
    link: '#',
  },
  {
    jogo: 'imgJogos/mines.jpg',
    pro: false,
    porcentagem: gerarNumeroAleatorio(90, 98),
    id: 9,
    link: '/mines',

  },
  //--------------------------------------------
  {
    jogo: 'imgJogos/crash.jpg',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',

  },
  {
    jogo: 'imgJogos/double.png',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',

  },
  {
    jogo: 'imgJogos/dragon-tiger-luck.png',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',

  },

  {
    jogo: 'imgJogos/fortune_dragon.png',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',

  },
  {
    jogo: 'imgJogos/fortune-mouse.jpg',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '/Rato',

  },
  {
    jogo: 'imgJogos/fortune-ox.jpg',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '/touro',

  },
  {
    jogo: 'imgJogos/fortune-rabbit.jpg',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '/coelho',

  },
  {
    jogo: 'imgJogos/magnify-man.png',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',

  },
  {
    jogo: 'imgJogos/prosperityLion.png',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',

  },
  {
    jogo: 'imgJogos/roelta-xxxtreme.png',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',


  },
  {
    jogo: 'imgJogos/roleta-brasileira.png',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',

  },
  {
    jogo: 'imgJogos/roleta-crazy-time.jpg',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',

  },

  {
    jogo: 'imgJogos/sword.jpg',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',
  },
  {
    jogo: 'imgJogos/thimbles.png',
    pro: false,
    porcentagem: gerarNumeroAleatorio(65, 76),
    id: 1,
    link: '#',

  },

]



const primeirosNoveObjetos = games.slice(0, 10);
const restanteDoArray = games.slice(10, games.length)

function handlePro (pro){
  
  window.scrollTo(0, 0)

}

function App() {


  return (
    <Main>

      <Header />

      <PixSlider />

      <BannerSlide />

      <SectionSejMenbro />

      <p className='jogosDisponiveis' >JOGOS COM A MAIOR ASSERTIVIDADE DO HACKERPRO
        JOGOS COM MAIS PADRÕES IDENTIFICADOS
      </p>

      <Section1 key={999} bgc={'#ffffff18'} mg={'3rem'}>
        {

          primeirosNoveObjetos.map((element, index) => {

            return (

              <Link key={index} onClick={element.pro === true ? handlePro : ''} to={element.pro === true ? '': element.link}>
                <div>
                  <img src={element.jogo} alt="" />
                  <ProgressBar progress={element.porcentagem} />
                </div>
              </Link>

            )
          })}
      </Section1>

      <p className='jogosDisponiveis' >JOGOS COM A MAIOR ASSERTIVIDADE DO HACKERPRO
        JOGOS COM MAIS PADRÕES IDENTIFICADOS
      </p>


      <Section1 key={8909} mg={'0rem'} >
        {

          restanteDoArray.map((element, index) => {

            return (

              <Link key={index + 10} to={element.pro ? '#' : element.link}>
                <div>
                  <img src={element.jogo} alt="" />
                  <ProgressBar progress={element.porcentagem} />
                </div>
              </Link>
            )
          })}
      </Section1>


      {/* <FooterS >
        <li>
          <RiMoneyDollarCircleFill style={{ fontSize: '2rem' }} />
          Minutos
        </li>

      </FooterS> */}

    </Main>
  )
}

export default App
