import Pedals from './Pedals';

function Home({allPedals, setPedal}) {

    return(
        <div>
            <div>
                <Pedals allPedals={allPedals} setPedal={setPedal}/>
            </div>
            <div className='grey-container'>
                <div className='centered small-container'>
                    <h1>
                        Audio effect units made in Houston, TX
                        from stolen NASA equipment
                        and bayou mud
                    </h1>
                    <p>Buy directly by e-mailing me at Raccoonlabsfx@gmail.com</p>
                    <p>Or visit my Reverb.com Store below:</p>
                    <button className="white button">Reverb.com Store</button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Home;