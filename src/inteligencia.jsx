import { Link } from "react-router-dom";
import Botaohome from "./botaohome";
import styled from "styled-components";
import ProgressBar from './RandomProgressBar';
import Header from "./components/Header";
import BannerSlide from "./components/BannersSlider";
import PixSlider from "./components/PixSlider";


const MainInteligencia = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* height: 100vh; */

  h1{
    margin-bottom: 3rem;
  }

  `

const UlGroup = styled.ul`
  display: flex;
  gap: 3rem;
  align-content: center;
  justify-content: center;
  background-color: #262626;
  padding: 2rem;
  /* margin: 5%; */
  margin-bottom: 5rem;
  border-radius: 10px;
  width: 80%;
  
  li{
    list-style: none;
    color: #fff;

  }
  
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    /* height: 100%; */
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .list-stile img{
      width: 130px;
    }

  }

`

const BannerS = styled.img`
  

`

const Acertividade = styled.div`
  
  width: 500px;
  background-color: #262626;
  padding: 2rem 1rem;
  margin: 2rem 2rem;
  border-radius: 8px ;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 767px) {
    width: 80%;
  }

`


function Inteligencia() {

  function gerarNumeroAleatorio(max, min) {

    const numeroAleatorio = Math.random();
    const numeroNoIntervalo = numeroAleatorio * (max - min) + min;
    const numeroFinal = Math.floor(numeroNoIntervalo);

    return numeroFinal;
  }

  return (
    <MainInteligencia>
      <Header />

      <PixSlider />

      <BannerSlide />

      <Acertividade>
        <p>Taxa de Assertividade</p>
        <ProgressBar progress={gerarNumeroAleatorio(99, 95)} />
      </Acertividade>


      <UlGroup>
        <li>
          <Link to="/tiger" className="list-stile" >
            <img src="/imgJogos/tiger.webp" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/coelho" className="list-stile" >
            <img src="imgJogos/rabbit.webp" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Rato" className="list-stile" >
            <img src="imgJogos/rato.webp" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/touro" className="list-stile" >
            <img src="imgJogos/touro.webp" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/crash" className="list-stile" >
            <img src="/crash.webp" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/aviator" className="list-stile" >
            <img src="/Aviator.webp" alt="" />
          </Link>
        </li>
      </UlGroup>

      <Botaohome />

    </MainInteligencia>
  );
}

export default Inteligencia;