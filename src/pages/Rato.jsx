import styled from "styled-components";
import Botaohome from "../botaohome";
import { useState, useEffect, useMemo } from 'react';
import Timer from  './Timer'
import Iframe from "../components/Iframe";


const Div = styled.div`
  font-family: 'Potta One', cursive !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-image: url('/rato.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 520px;
  gap: 3rem;


  img{
    width: 500px;
  }

  button{
    margin-top: 6rem;
    display: flex;
    gap: 1rem;
    font-family: 'Potta One', cursive !important;
    padding: 20px 50px;
    border-radius: 8px;
    border: none;
    background-color: #e6252f;
    color: #fcac56;
    font-size: 20px;
    padding: 15px 30px;
    border-radius: 10px;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover{
      transform: scale(0.9);
    }
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.3rem
    
  }
  p{
    /* font-family: 'Potta One', cursive !important; */
    color: black ;
    font-weight: 700;

  }

`


function Tiger() {
  window.scrollTo(0, 0)
  const [mostrarConteudo, setMostrarConteudo] = useState(false);
  const [contador, setContador] = useState(true);

  const iniciarContador = () => {

    setMostrarConteudo(true);
    setContador(false);

  };

  const terminaSinal = () => {
    setContador(true);
    setMostrarConteudo(false)

  }

  const RandNum = () => {
    return Math.floor(Math.random() * (10 - 3 + 1)) + 3
  }

  function horaMinutos() {
    const expiryTime = 1; // tempo de expiração em minutos
    const now = new Date();
    const expiry = new Date(now.getTime() + expiryTime * 60 * 1000);
    const hours = String(expiry.getHours()).padStart(2, '0');
    const minutes = String(expiry.getMinutes()).padStart(2, '0');

    return hours + ':' + minutes

  }

  return (
    <>
      <Botaohome />
      <Div>
        
        <button onClick={iniciarContador}>
          {contador ? 'Identificar sinal' : `Aguarde`}
          <p>{contador ? '' : <Timer tempo={60} setContador={setContador} terminaSinal={terminaSinal}/>  }</p>
        </button>
        {
          mostrarConteudo ?
            <div>
              <p>Entre em: {horaMinutos()}</p>
              <p>{RandNum()}x Normal</p>
              <p>{RandNum()}x Turbo</p>
            </div>


            :

            ''

        }
      </Div>

      <Iframe link={'https://turbopix.bet/?r=vtbkydlj'} />
    </>
  );
}



export default Tiger;