import PedalCard from "./PedalCard";

function Pedals({allPedals, setPedal}) {
    let pedal_list = allPedals.map((pedal) => {
        return<PedalCard key={pedal.id} pedal={pedal} setPedal={setPedal}/>
    })
    
    return(
        <div className="cards-container">
            {pedal_list}
        </div>
    )
}

export default Pedals;