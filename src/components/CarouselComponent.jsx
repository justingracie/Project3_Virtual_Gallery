import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom'
 
const CarouselComponent = () => {
    return(
    <div className='carousel-wrapper'>
        <Carousel infiniteLoop useKeyboardArrows autoPlay interval={6000}>
            <div>
                <Link to='/collectionDali'>
                    <div>
                        <img className='homeArt' src="../sadness.jpeg" alt="City of Drawers" />
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/collectionCezanne'>
                    <div>
                        <img className='homeArt' src="../Skulls.jpeg" alt="Sketchbook No. 2 (L'Estaque)" />
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/collectionPicasso'>
                    <div>
                        <img className='homeArt' src="../Still.jpeg" alt="Nude under a Pine Tree" />
                    </div>
                </Link>
            </div>
        </Carousel>
    </div>
    )
}

export default CarouselComponent