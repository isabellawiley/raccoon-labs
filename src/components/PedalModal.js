// import pic from '../../images/ecto_cooler_pedal-front.png';

function PedalModal({image}){

    function handlePedalClick(){
        let modal = document.getElementById("myModal");
        let modalImg = document.getElementById("img01");
        modal.style.display = "block";
        modalImg.src = image;
    }

    function handleClose(){
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    
    return(
        <div>
            <img id='pedalImg' src={image} alt='pedal' onClick={handlePedalClick}/>
            <div id="myModal" className="modal">
                <span className="close" onClick={handleClose}>&times;</span>
                <img className="modal-content" id="img01" alt="pedal"/>
            </div>
        </div>
    )
}

export default PedalModal;