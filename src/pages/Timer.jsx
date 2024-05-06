import { useState, useEffect } from 'react';
import styled from 'styled-components';


const TimerS = styled.div`
  font-family: 'Potta One', cursive !important;
`

const Countdown = ({ setContador, setSinal,setRender, constrolaSinal, tempo, terminaSinal }) => {
  const [count, setCount] = useState(tempo); // Tempo em segundos (3 minutos = 180 segundos)

  useEffect(() => {

    const timer = setInterval(() => {

      setCount((prevCount) => {

        if (prevCount == 0) {
          clearInterval(timer);
          return prevCount
        }
        return prevCount - 1;
      });

    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count == 0) {
     setContador && setContador(true)
     setSinal && setSinal(false)
     constrolaSinal && constrolaSinal()
     terminaSinal && terminaSinal()
     setRender && setRender(false)
    }
  })

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (

    <TimerS>{formatTime(count)}</TimerS>

  );
};

export default Countdown;
