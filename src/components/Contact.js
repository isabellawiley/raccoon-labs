import instagram from "../assets/instagram_logo.png";
import link from "../assets/link_icon.png";
import "../styling/contact.css"

function Contact() {

    return(
        <div className="grey-container contact">
            <h1>Contact</h1>
            <a href="mailto:raccoonlabsfx@gmail.com" title="Email">
                <p>raccoonlabsfx@gmail.com</p>
            </a>
            <div>
                <a href="https://reverb.com/shop/raccoon-dad-fx" target="_blank" rel="noreferrer" title="Reverb Store"><img src={link} alt="link icon"/></a>
                <a href="https://www.instagram.com/raccoonlabs/" target="_blank" rel="noreferrer" title="Instagram"><img src={instagram} alt="instagram"/></a>
            </div>
        </div>
    )
}

export default Contact;