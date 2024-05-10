import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";


const DivBotao = styled.div`
  border-top: 1px solid #ffffff21 ;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #262626;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0px;
  z-index: 1;

  `

const BtnHome = styled.button`
  border-radius: 8px;
  border: none;
  bottom: 100px;
  padding: 0.6rem 2rem;
  font-weight: 600;
  font-size: 17px;
  background-color: transparent;
  font-size: 2rem;
  color: white;
  display: flex;
`

function Botaohome() {
  return (
    <DivBotao>
      <Link to="/" >
        <BtnHome> <GoHomeFill /> </BtnHome>
      </Link>
    </DivBotao>
  );
}

export default Botaohome;