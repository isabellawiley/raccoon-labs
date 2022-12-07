import Pedals from './Pedals';
import VideoCarousel from './VideoCarousel';

function Home({allPedals, setPedal}) {
    const videos = [];
    allPedals.map((pedal) => {
        if(pedal.video){
            videos.push(pedal.video)
        }
        if(pedal.review){
            videos.push(pedal.review)
        }
    });

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
                    <a href="https://reverb.com/shop/raccoon-dad-fx" target="_blank" rel="noreferrer"><button className="white button">Reverb.com Store</button></a>
                </div>
            </div>
            <div>
                <VideoCarousel videos={videos} />
            </div>
        </div>
    )
}

export default Home;