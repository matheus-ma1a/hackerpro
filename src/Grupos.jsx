import styled from "styled-components";
import Botaohome from "./botaohome";
import Header from "./components/Header";
import BannerSlide from "./components/BannersSlider";
import PixSlider from "./components/PixSlider";

const SectionS = styled.div`
  color: white;
  background-color: #262626;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 5rem 5rem;
  padding: 5rem 1rem;
  margin: 3rem  10%;
  `

const Lista = styled.ul`

  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  
  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    div button{
      color: black;
    }

  }
  
  img{
    width: 130px;
    border-radius: 8px;
  }
  
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    button{
      background-color: #46f000;
      border: none;
      padding: 0.5rem;
      border-radius: 0.2rem;
      cursor: pointer;
      a{
        color: black;
        text-decoration: none;
      }
    }
    
  }

  div p{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    a{
      text-decoration: none;
      color: #46f000;
    }

  }

  @media (max-width: 400px) {
    div p {
      font-size: 13px
    }
  }

`

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

function Grupos() {
  return (
    <>
      <Header />
      <Botaohome />
      <PixSlider />
      <Banner>
        <BannerSlide />
      </Banner>


      <SectionS>
        <h1>Grupos</h1>
        <Lista>
          <li>
            <img src="/imgJogos/tiger.webp" alt="" />
            <div>
              <button>
                <a href="https://t.me/+AX9z980tXk01ZWFh">ENTRAR NO GRUPO GRÁTIS</a>
              </button>
              <p>
                Não conseguiu acessar?
                <a href="https://t.me/+AX9z980tXk01ZWFh">Clique aqui</a>
              </p>
            </div>
          </li>
          <li>
            <img src="/imgJogos/rato.webp" alt="" />
            <div>
              <button>
                <a href="https://chat.whatsapp.com/GFNkyCWiGpnGEuu26Fh6Uo">ENTRAR NO GRUPO GRÁTIS</a>
              </button>
              <p>
                Não conseguiu acessar?
                <a href="https://chat.whatsapp.com/GFNkyCWiGpnGEuu26Fh6Uo">Clique aqui</a>
              </p>
            </div>
          </li>
          <li>
            <img src="/imgJogos/touro.webp" alt="" />
            <div>
              <button>
                <a href="https://chat.whatsapp.com/GFNkyCWiGpnGEuu26Fh6Uo">ENTRAR NO GRUPO GRÁTIS</a>
              </button>
              <p>
                Não conseguiu acessar?
                <a href="https://chat.whatsapp.com/GFNkyCWiGpnGEuu26Fh6Uo">Clique aqui</a>
              </p>
            </div>
          </li>
          <li>
            <img src="/imgJogos/rabbit.webp" alt="" />
            <div>
              <button>
                <a href="https://chat.whatsapp.com/GFNkyCWiGpnGEuu26Fh6Uo">ENTRAR NO GRUPO GRÁTIS</a>
              </button>
              <p>
                Não conseguiu acessar?
                <a href="https://chat.whatsapp.com/GFNkyCWiGpnGEuu26Fh6Uo">Clique aqui</a>
              </p>
            </div>
          </li>
          <li>
            <img src="/crash.webp" alt="" />
            <div>
              <button>
                <a href="https://chat.whatsapp.com/GFNkyCWiGpnGEuu26Fh6Uo">ENTRAR NO GRUPO GRÁTIS</a>
              </button>
              <p>
                Não conseguiu acessar?
                <a href="https://chat.whatsapp.com/GFNkyCWiGpnGEuu26Fh6Uo">Clique aqui</a>
              </p>
            </div>
          </li>
          <li>
            <img src="/Aviator.webp" alt="" />
            <div>
              <button>
                <a href="https://chat.whatsapp.com/GFNkyCWiGpnGEuu26Fh6Uo">ENTRAR NO GRUPO GRÁTIS</a>
              </button>
              <p>
                Não conseguiu acessar?
                <a href="https://chat.whatsapp.com/GFNkyCWiGpnGEuu26Fh6Uo">Clique aqui</a>
              </p>
            </div>
          </li>
        </Lista>
      </SectionS>
    </>
  );
}

export default Grupos;