import { IconContext } from 'react-icons';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
function Slideshow({images}) {

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
                <a className="prev hidden" onClick={prevSlide}><MdArrowBackIosNew/></a>
                <a className="next" onClick={nextSlide}><MdArrowForwardIos/></a>
                </IconContext.Provider>
                <div className="slideshow" onScroll={handleScroll}>
                    {images.map((slide, index) => 
                        <div key={index} className="slide" >
                                <img src={slide} alt='slide image' className='slideImage' />
                            
                        </div>
                    )}
                </div>
            </div> 
            : <div className='slideshow'><img src={images[0]} alt='pedal image' className="slideshowImage"/></div>}
        </div>
    )
}

export default Slideshow;

// IoIosArrowForward IoIosArrowBack
// MdArrowBackIosNew MdArrowForwardIos