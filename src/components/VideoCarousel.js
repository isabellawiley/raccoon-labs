import { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function VideoCarousel({videos}){
    const [activeIndex, setActiveIndex] = useState(0);
    const [mouseIn, setMouseIn] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    function updateIndex(newIndex) {
        if(newIndex < 0){
            newIndex = videos.length - 1;
        }
        else if(newIndex >= videos.length) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(!mouseIn && !isPlaying){
                updateIndex(activeIndex + 1);
            }
        }, 3500);

        return() => {
            if(interval) {
                clearInterval(interval);
            }
        }
    })

    function handleTouchStart(event){
        let start = event.touches[0].clientX;
        let carousel = document.getElementById('carousel');
        carousel.addEventListener('touchend', (event) => {
            let end = event.changedTouches[0].clientX;
            if(start > end + 50){
                updateIndex(activeIndex + 1);
            }
            else if(start < end - 50){
                updateIndex(activeIndex - 1);
            }
        })
    }
    
    return(
        <div className="carousel-container">
            <div id="carousel" className="carousel" onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)} onTouchStart={(event) => handleTouchStart(event)} >
                <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                    {videos.map((vid, index) => 
                        <div key={index} className="carousel-item-container" >
                            <div className="carousel-item">
                                <YouTube videoId={vid.replace("https://www.youtube.com/embed/", "")} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} sandbox="allow-presentation"/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button id="left-button" onClick={() => updateIndex(activeIndex - 1)}><AiOutlineDoubleLeft/></button>
            <button id="right-button" onClick={() => updateIndex(activeIndex + 1)}><AiOutlineDoubleRight/></button>
        </div>
    )
}

export default VideoCarousel;