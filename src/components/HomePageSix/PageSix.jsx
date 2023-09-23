import Carousel from 'react-bootstrap/Carousel'
import SliderOne from '../HomePageOne/component/sliders/SliderOne';
import SliderTwo from '../HomePageOne/component/sliders/SliderTwo';
import SliderThree from '../HomePageOne/component/sliders/SliderThree';
import PageSixSliderOne from './sliders/PageSixSliderOne';


function PageSix() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <PageSixSliderOne />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <PageSixSliderOne />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <PageSixSliderOne />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <PageSixSliderOne />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <PageSixSliderOne />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  );
}

export default PageSix;