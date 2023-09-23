import Carousel from 'react-bootstrap/Carousel'
import SliderOne from './sliders/SliderOne';
import SliderTwo from './sliders/SliderTwo';
import NavBar from './NavBar';
import SliderThree from './sliders/SliderThree';

function PageOne() {
  return (
    <>
    <NavBar/>
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <SliderOne/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <SliderTwo/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <SliderThree/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default PageOne;