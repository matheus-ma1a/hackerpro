import { Splide, SplideSlide } from '@splidejs/react-splide';



function BannerSlide() {
  return (
    <>
      
      <Splide

        options={{
          // type: 'loop',
          // autoplay: true,
          height: '100%',
          width: '600px',

        }}

        className='SlideWrapper'

      >
        <SplideSlide>
          <img className='imgInsideSlide' src="./bn1.webp" alt="" />
        </SplideSlide>
      </Splide>
    </>
  );
}

export default BannerSlide;