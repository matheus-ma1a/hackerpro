import { Splide, SplideSlide } from '@splidejs/react-splide';



function BannerSlide(props) {
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
          <img className='imgInsideSlide' src={props.banner} alt="" />
        </SplideSlide>
      </Splide>
    </>
  );
}

export default BannerSlide;