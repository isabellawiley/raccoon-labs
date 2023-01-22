import { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function VideoCarousel({videos}){
    console.log('ran vid');
    const [activeIndex, setActiveIndex] = useState(0);
    const [mouseIn, setMouseIn] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    // const opts = {
    //     sandbox: 'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation'
    // }

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
        // const interval = setInterval(() => {
        //     if(!mouseIn && !isPlaying){
        //         updateIndex(activeIndex + 1);
        //     }
        // }, 3500);

        // let vids = document.getElementsByClassName('pedalYtVid');
        // // vids?.forEach((vid) => vid.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation'))

        // return() => {
        //     if(interval) {
        //         clearInterval(interval);
        //     }
        // }
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

    // function handleReady(event){
    //     console.log('before: ', event.target.h.sandbox)
    //     event.target.h.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation');
    //     console.log('after: ', event.target.h.sandbox)

    // }

    
    
    return(
        <div className="carousel-container">
                    <button id="left-button" onClick={() => updateIndex(activeIndex - 1)}><AiOutlineDoubleLeft/></button>
            <div id="carousel" className="carousel" onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)} onTouchStart={(event) => handleTouchStart(event)} >
                <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                    {videos.map((vid, index) => 
                        <div key={index} className="carousel-item-container" >
                            <div className="carousel-item">
                                <iframe src={vid} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button id="right-button" onClick={() => updateIndex(activeIndex + 1)}><AiOutlineDoubleRight/></button>
        </div>
    )
}

export default VideoCarousel;