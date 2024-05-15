import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { LuBell } from "react-icons/lu";
import { Link } from 'react-router-dom';



const HeadeS = styled.header`
  background-color: #121214;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: x-large;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .div1{
    height: 100%;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .div2{
    /* background-color: #ffffff21; */
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }


`
const style = { color: "white" }

function Header() {
  return (
    <HeadeS>
      <div className='div1'>
        <GiHamburgerMenu />
        <h5>INICIO</h5>
      </div>
      <div className='div2'>
        <LuBell />
        <Link className='loginIcon' to={'/login'}>
          <FaCircleUser style={style} />
        </Link>
      </div>
    </HeadeS>
  );
}

export default Header;