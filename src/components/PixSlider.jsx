import styled from 'styled-components'

const Slidepix = styled.div`

  z-index: 1;
  display: flex;
  position: absolute;


  animation: slide 10s linear infinite;
    @keyframes slide {
    0% {
      /* transform: translateX(0); */
      left: 0px;
    }
    100% {
      /* transform: translateX(-300%); */
      left: -500px;
    }
}

`

function PixSlider() {
  return (
    <div className='divPixslide'>

      <Slidepix>
        <div className='teste' >
          <img src="/imgSlide/1.png" alt="" />
        </div>
        <div className='teste' >
          <img src="/imgSlide/10.png" alt="" />
        </div>
        <div className='teste' >
          <img src="/imgSlide/11.png" alt="" />
        </div>
        <div className='teste' >
          <img src="/imgSlide/2.png" alt="" />
        </div>
        <div className='teste' >
          <img src="/imgSlide/3.png" alt="" />
        </div>
        <div className='teste' >
          <img src="/imgSlide/5.png" alt="" />
        </div>
        <div className='teste' >
          <img src="/imgSlide/9.png" alt="" />
        </div>

      </Slidepix>
    </div>
  );
}

export default PixSlider;