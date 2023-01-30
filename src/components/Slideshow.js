import { IconContext } from 'react-icons';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
function Slideshow({images}) {
    let slides = document.getElementsByClassName('slideshow')[0];
    if (slides) {slides.scrollLeft = 0;}
    
    function handleScroll(event) {
        let prev = (document.getElementsByClassName('prev'))[0];
        let next = (document.getElementsByClassName('next'))[0];
        let slidesScroll = event.target.scrollLeft;

        if(slidesScroll < window.innerWidth / 2){
            prev.className = 'prev hidden'
            next.className = 'next'
        }
        else {
            prev.className = 'prev'
            next.className = 'next hidden'
        }
    }

    function nextSlide() {
        (document.getElementsByClassName('slideshow'))[0].scrollLeft += window.innerWidth;
    }

    function prevSlide() {
        (document.getElementsByClassName('slideshow'))[0].scrollLeft -= window.innerWidth;
    }

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return(
        <div>
            {images.length > 1 ? 
            <div className="slideshow-container">
                <IconContext.Provider value={{className: 'slideshow-arrow'}}>
                <button className="prev hidden" onClick={prevSlide}><MdArrowBackIosNew/></button>
                <button className="next" onClick={nextSlide}><MdArrowForwardIos/></button>
                </IconContext.Provider>
                <div className="slideshow" onScroll={handleScroll}>
                    {images.map((slide, index) => 
                        <div key={index} className="slide" >
                                <img src={slide} alt='slide' className='slideImage' />
                            
                        </div>
                    )}
                </div>
            </div> 
            : <div className='slideshow'><img src={images[0]} alt='pedal' className="slideshowImage"/></div>}
        </div>
    )
}

export default Slideshow;

// IoIosArrowForward IoIosArrowBack
// MdArrowBackIosNew MdArrowForwardIos