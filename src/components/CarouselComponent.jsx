import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
 
const CarouselComponent = () => {
    return(
    <div className='carousel-wrapper'>
        <Carousel infiniteLoop useKeyboardArrows autoPlay interval={6000}>
            <div>
                <img className='homeArt' src="../Carousel_1.jpeg" alt="City of Drawers" />
            </div>
            <div>
                <img className='homeArt' src="../Carousel_2.jpeg" alt="Sketchbook No. 2 (L'Estaque)" />
            </div>
            <div>
                <img className='homeArt' src="../Carousel_3.jpeg" alt="Nude under a Pine Tree" />
            </div>
        </Carousel>
    </div>
    )
}

export default CarouselComponent