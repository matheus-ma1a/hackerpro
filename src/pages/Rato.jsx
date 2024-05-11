import { useEffect, useState } from "react";
import styled from "styled-components";
import Timer from './Timer'
import Iframe from "../components/Iframe";
import Botaohome from "../components/botaohome";


const CrashS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  .interna{
    display: flex;
    flex-direction: column;

    img{
      width: 130px;
      border-radius: 5px;
      margin-bottom: 2rem;
    }

  }

`

const DivMain = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #101213;
  width: max-content;
  padding: 1rem 3rem;
  gap: 1rem;
  border-radius: 5px;
  margin-top: 2rem;

  h1{
    display: flex;
    flex-direction: column;
  }
  
`

const Enunciado = styled.div`
  background-color: #212425;
  padding: 1rem 7rem;
  border-radius: 5px;
  
`

const Resultado = styled.div`
  
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  
  div{
    
    border-radius: 5px;
    padding: 1rem;
    background-color: #212425;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

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

function Crash() {
  const [sinal, setSinal] = useState(true)
  const [textControl, setTextControl] = useState(true)


  const handleButton = () => {
    setSinal(false)
    setTextControl(false)
  }

  const constrolaSinal = () => {
    setTextControl(true)
    setSinal(true)
    console.log('funcionei');
  }

  window.scrollTo(0, 0)

  function horaMinutos(tempo) {
    const expiryTime = 1; // tempo de expiração em minutos
    const now = new Date();
    const expiry = new Date(now.getTime() + tempo * 60 * 1000);
    const hours = String(expiry.getHours()).padStart(2, '0');
    const minutes = String(expiry.getMinutes()).padStart(2, '0');

    return hours + ':' + minutes

  }

  const RandNum = () => {
    return Math.floor(Math.random() * (10 - 3 + 1)) + 3
  }

  return (
    <>
      <Botaohome home={'/'}/>
      <CrashS>
        <div className="interna" >
          <img src="imgJogos\fortune-mouse.jpg" alt="" />
          Fortune Mouse
        </div>
        <DivMain>

          <Enunciado>
            <p>{sinal ? 'Gere um sinal' : 'Sinal gerado'}</p>
          </Enunciado>

          <Resultado>

            <div>
              <span>{
                sinal ? '--'
                  :
                  <>
                    <p>Normal</p>
                    <p>{RandNum()}X</p>
                  </>}
              </span>
            </div>

            <div>
              <span>
                {
                  sinal ? '--'
                    :
                    <>
                      <p>Turbo</p>
                      {RandNum()}X
                    </>
                }
              </span>
            </div>

            <div>
              <p>Valido até</p>
              <span>
                {
                  sinal ? '--'
                    :
                    <>
                      <p>{horaMinutos(3)}</p>
                    </>
                }
              </span>
            </div>

          </Resultado>

          <ButtonS onClick={handleButton} disabled={sinal ? false : true} style={sinal ? { backgroundColor: '#1e66b8' } : { backgroundColor: '#b81e1e92' }} >
            {
              textControl ? 'Gerar Sinal' : <Timer tempo={120} setSinal={setSinal} constrolaSinal={constrolaSinal} />
            }

          </ButtonS>
        </DivMain>
        <Iframe />
      </CrashS>
    </>
  );
}

export default Crash;