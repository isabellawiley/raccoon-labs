import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "./Slideshow";
import PedalModal from "./PedalModal";

function Pedal({selectedPedal, allPedals}){
    let {id} = useParams();
    const [activePedal, setActivePedal] = useState(()=>selectedPedal);

    useEffect(() => {
        if(id){
            setActivePedal(allPedals.find(element => element.link === id))
        }
    },[selectedPedal, id])
    
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
                    description?.bullets.forEach((point) => <p>{point}</p>) : <p></p>
                }
                </div>
                <div className="spacing">
                {description?.details ? 
                    Object.entries(description?.details).map((line) => 
                        <p key={line}><strong>{line[0]} - </strong>{line[1]}</p>
                    )  : <p></p>
                }
                </div>
                <a href="/how-to-buy"><button className="white button">BUY</button></a>
                </span>
            </div>
            {images ? 
            <div className="pedal-image">
                {images.map((pic) =>
                    <PedalModal key={pic} image={pic} />
                )}
            </div>
            : null}
            {images ? <Slideshow images={images} /> : null}
            {video ? 
                <div className="pedal-video-container">
                    <div className="pedal-video">
                        <iframe src={video} title={title} allowFullScreen></iframe>
                    </div>
                </div>
             : null}
            {review ? 
                <div className="pedal-video-container">
                    <div className="pedal-video">
                        <iframe src={review} title={title} allowFullScreen></iframe>
                    </div>
                </div> 
            : null}
        </div>
    )
}

export default Pedal;