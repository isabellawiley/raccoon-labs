import { Link } from "react-router-dom";

function PedalCard({pedal, setPedal}){
    const {title, subtitle, image, link} = pedal;

    function handleClick(){
        setPedal(pedal);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(
        
        <div className="card" onClick={handleClick}>
            <Link to={link}><img src={image} alt={title} />
            <div className="card-overlay">
                <div className="card-text">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default PedalCard;