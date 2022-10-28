
function Pedal({selectedPedal}){
    console.log(selectedPedal);
    const {title, subtitle, description} = selectedPedal;
    const {paragraph, bullets, details} = description;
    console.log(details);

    return(
        <div className="pedal-container">
            <span className="title">
                <h1>{title}</h1>
            </span>
            <span className="description">
            <h2>{subtitle}</h2>
            <p>{paragraph}</p>
            {bullets ? 
                bullets.map((point) => <p>{point}</p>) : <p></p>
            }
            {details ? 
                Object.entries(details).map((line) => 
                    <p><strong>{line[0]} - </strong>{line[1]}</p>
                )  : <p></p>
            }
            <button><a href="/how-to-buy">Buy</a></button>
            </span>
        </div>
    )
}

export default Pedal;