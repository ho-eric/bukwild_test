import { useState } from 'react';
import Marquee from './marquee';

const abc_logo = '/images/abc_logo.svg';
const slide_one = '/images/backgrounds/slide_one.jpg';
const slide_two = '/images/backgrounds/slide_two.jpg';
const slide_three = '/images/backgrounds/slide_three.jpg';


function LayoutUI(props) {

    const [page, setPage] = useState("industries");

    if (page === "industries") {
        return (
            <div style={{ backgroundImage: `url(${slide_one})` }} className="container">
                <div className="layoutUI">
                    <div className="logoMenu">
                        <img src={abc_logo} alt="logo" />
                        <button className="menuButton" style={{ color: "#ffc004" }} onClick={() => { setPage("industries") }}>Industries</button>
                        <button className="menuButton" onClick={() => setPage("services")}>Services</button>
                        <button className="menuButton" onClick={() => setPage("aboutUs")}>About Us</button>
                    </div>
                    <div>
                        <button className="contactButton">Contact Us</button>
                    </div>
                </div>
                <Marquee curPage={page} />
            </div>
        );
    } else if (page === 'services') {
        return (
            <div style={{ backgroundImage: `url(${slide_two})` }} className="container">
                <div className="layoutUI">
                    <div className="logoMenu">
                        <img src={abc_logo} alt="logo" />
                        <button className="menuButton" onClick={() => setPage("industries")}>Industries</button>
                        <button className="menuButton" style={{ color: "#ffc004" }} onClick={() => setPage("services")}>Services</button>
                        <button className="menuButton" onClick={() => setPage("aboutUs")}>About Us</button>
                    </div>
                    <div>
                        <button className="contactButton">Contact Us</button>
                    </div>
                </div>
                <Marquee curPage={page} />
            </div>
        );
    } else if (page === 'aboutUs') {
        return (
            <div style={{ backgroundImage: `url(${slide_three})` }} className="container">
                <div className="layoutUI">
                    <div className="logoMenu">
                        <img src={abc_logo} alt="logo" />
                        <button className="menuButton" onClick={() => setPage("industries")}>Industries</button>
                        <button className="menuButton" onClick={() => setPage("services")}>Services</button>
                        <button className="menuButton" style={{ color: "#ffc004" }} onClick={() => setPage("aboutUs")}>About Us</button>
                    </div>
                    <div>
                        <button className="contactButton">Contact Us</button>
                    </div>
                </div>
                <Marquee curPage={page} />
            </div>
        );
    }
}

export default LayoutUI;