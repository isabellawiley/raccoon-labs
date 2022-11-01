import { Link } from "react-router-dom";

function PedalCard({pedal, setPedal}){
    const {title, subtitle, image, link} = pedal;

    function handleClick(){
        setPedal(pedal);
    }

    return(
        
        <div className="card" onClick={handleClick}>
            <Link to={link}><img src={image} alt={title} />
            <div className="card-overlay">
                <div className="card-text">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default PedalCard;