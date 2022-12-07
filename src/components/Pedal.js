import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "./Slideshow";

function Pedal({selectedPedal, allPedals}){
    let {id} = useParams();
    const [activePedal, setActivePedal] = useState(()=>selectedPedal);

    useEffect(() => {
        if(id){
            setActivePedal(allPedals.find(element => element.link == id))
        }
    },[selectedPedal])
    
    const {title, subtitle, description, images, video, review} = activePedal;


    return(
        <div>
            <div className="grey-container pedal-container">
                <span className="pedal-title">
                    <h1>{title}</h1>
                </span>
                <span className="description">
                <h2 className="spacing">{subtitle}</h2>
                <div className="spacing">
                <p>{description?.paragraph}</p>
                </div>
                <div className="spacing">
                {description?.bullets ? 
                    description?.bullets.map((point) => <p>{point}</p>) : <p></p>
                }
                </div>
                <div className="spacing">
                {description?.details ? 
                    Object.entries(description?.details).map((line) => 
                        <p><strong>{line[0]} - </strong>{line[1]}</p>
                    )  : <p></p>
                }
                </div>
                <a href="/how-to-buy"><button className="white button">BUY</button></a>
                </span>
            </div>
            {images ? 
            <div className="pedal-image">
                {images.map((pic, index) =>
                    <img src={pic} alt={title} key={index} />
                )}
                {/* <img src={images[1]} alt={title}/>
                {images[2] ? <img src={images[2]} alt={title}/> : null} */}
            </div>
            : null}
            {images ? <Slideshow images={images} /> : null}
            {video ? 
                <div className="pedal-video-container">
                    <div className="pedal-video">
                        <iframe src={video} title={title}></iframe>
                    </div>
                </div>
             : null}
            {review ? 
                <div className="pedal-video-container">
                    <div className="pedal-video">
                        <iframe src={review} title={title}></iframe>
                    </div>
                </div> 
            : null}
        </div>
    )
}

export default Pedal;