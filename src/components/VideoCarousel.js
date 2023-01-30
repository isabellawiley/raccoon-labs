import { useCallback, useEffect } from "react";
import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "../styling/carousel.css"

function VideoCarousel({videos}){
    const [activeIndex, setActiveIndex] = useState(0);
    const [mouseIn, setMouseIn] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // function updateIndex(newIndex) {
    //     if(newIndex < 0){
    //         newIndex = videos.length - 1;
    //     }
    //     else if(newIndex >= videos.length) {
    //         newIndex = 0;
    //     }

    //     setActiveIndex(newIndex);
    // }

    const updateIndex = useCallback((newIndex) => {
        if(newIndex < 0){
            newIndex = videos.length - 1;
        }
        else if(newIndex >= videos.length) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }, [])

    useEffect(() => {
        if (window.innerWidth < 769){
            setIsPlaying(true);
        }
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
    }, [mouseIn, isPlaying, updateIndex, activeIndex])

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
            <div id="left-button" onClick={() => updateIndex(activeIndex - 1)}><AiOutlineDoubleLeft/></div>
            <div id="carousel" className="carousel" onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)} onTouchStart={(event) => handleTouchStart(event)} >
                <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                    {videos.map((vid, index) => 
                        <div key={index} className="carousel-item-container" >
                            <div className="carousel-item" onTouchStart={() => setIsPlaying(true)}>
                                <iframe id="videoFrame" src={vid} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div id="right-button" onClick={() => updateIndex(activeIndex + 1)}><AiOutlineDoubleRight/></div>
        </div>
    )
}

export default VideoCarousel;