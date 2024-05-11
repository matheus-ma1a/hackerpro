import { useState, useEffect } from "react";
import './Mines.css'
import MinerGrid from "./MinerGrid/MineGrid";
import MinesPreload from "./MinerPreload/MinesPreload";
import styled from "styled-components";
import Iframe from "../../components/Iframe";
import Timer from '../Timer'
import Botaohome from "../../components/botaohome";



const ButtonH = styled.button`
    height: 40px;
    width: 100px;
    border: 0;
    border-radius: 6px;
    color: white;
    background-color: #05a532;
    cursor: pointer;
`
const ButtonS = styled.button`
  border: none;
  background: #1e66b8;
  padding: 0.3rem 0;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
`
const InfoMines = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;


  li{
    background-color: #3a3a3a;
    height: 60px;
    color: #ffffff;
    /* background-color: #4e0000; */
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
  }

  @media (max-width: 768px) {
    li{
    }
}

`

const circulosEstrelas = [
  '/fechado.png', '/fechado.png', '/star.png', '/fechado.png', '/fechado.png',

  '/fechado.png', '/star.png', '/fechado.png', '/fechado.png', '/fechado.png',

  '/fechado.png', '/star.png', '/fechado.png', '/fechado.png', '/star.png',

  '/fechado.png', '/fechado.png', '/star.png', '/fechado.png', '/fechado.png',

  '/fechado.png', '/fechado.png', '/fechado.png', '/star.png', '/fechado.png',
]


const loadSinal = () => {
  const arrayfixo = [...circulosEstrelas]
  const arrayEmbaralhado = arrayfixo.sort(() => Math.random() - 0.5)
  return arrayEmbaralhado
}

function horaMinutos(tempo) {
  const expiryTime = 1; // tempo de expiração em minutos
  const now = new Date();
  const expiry = new Date(now.getTime() + tempo * 60 * 1000);
  const hours = String(expiry.getHours()).padStart(2, '0');
  const minutes = String(expiry.getMinutes()).padStart(2, '0');

  return hours + ':' + minutes

}

function Mines() {
  const [render, setRender] = useState(false)
  const [sinal, setSinal] = useState()
  const [textControl, setTextControl] = useState(true)


  const handleButton = () => {
    setTextControl(false)
    setRender(!render)
    setSinal(loadSinal())
  }

  const constrolaSinal = () => {
    setTextControl(true)
    console.log('funcionei');
  }

  useEffect(() => {
    document.title = 'MI-Mines';
    window.scrollTo(0, 0)
  })


  return (
    <div className="content">
      <Botaohome home={'/vip'} />
      <div className="wrapper">
        <div className="main-Mines">

          <div className="wpper-sinal-Mines">
            <InfoMines>
              <li>
                <p>Proteçoes</p>
                {
                  render? 'Ate 02 ' : '--'
                }
              </li>
              <li>
                <p>N° de Minas</p>
                {
                  render? '6' : '--'
                }
              </li>
              <li>
                <p>Válido por</p>
                {
                  render? horaMinutos(3) : '--'
                }
              </li>


            </InfoMines>
            <div className="grid-Mines">
              {
                render ? <MinerGrid sinal={sinal} /> : <MinesPreload sinal={circulosEstrelas} sinalFixo={circulosEstrelas} />
              }
            </div>

            <ButtonS
              onClick={handleButton}
              disabled={render ? true : false}
              style={render ? { backgroundColor: '#b81e1e92' } : { backgroundColor: '#1e66b8' }} >
              {
                textControl ? 'Gerar Sinal' : <Timer tempo={120} setRender= {setRender} setSinal={setSinal} constrolaSinal={constrolaSinal}/>
              }

            </ButtonS>
          </div>
          <Iframe />

        </div>
      </div>
    </div>

  )
}

export default Mines;
