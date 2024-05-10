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
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
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
      <Botaohome />
      <div className="wrapper">
        <div className="main-Mines">

          <div className="wpper-sinal-Mines">
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
