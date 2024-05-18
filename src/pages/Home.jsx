import React from 'react';
import '../styles/home.css';
import doctor from '../ascerts/doctor1.jpg';
import about from '../ascerts/about.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const logoutfunc = () => {
        localStorage.removeItem("usertoken");
        return navigate('/login')
    }
    return (
        <div className='home'>
            <div className="homewrap">
                <div className="homebanner">
                    <div className="homebannerwrap">
                        <div className="homenav">
                            <div className="navlogo">LOGO</div>
                            <div className="navitems">
                                <ul className='navlist'>
                                    <li className="navitems navres">Home</li>
                                    <li className="navitems navres">About us</li>
                                    <li className="navitems navres">Our Services</li>
                                    <li className="navitems navres">Contact Us</li>
                                    <li className="navitems">{localStorage.getItem("usertoken") ? <span onClick={logoutfunc}>logout</span> : <Link to={'/login'}>Login</Link>}</li>
                                    <li className="navitems"><button className='bookbtn'>Book Appointment</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="herosection">
                            <div className="hero1">
                                <h2 className='hero1head'>Health Solutions for all</h2>
                                <div className="hero1text">Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc sapien diam, euismod et pretium id, volutpat et tortor. In vulputate lorem quis dui vestibulum, vitae imperdiet diam bibendum.</div>
                                <button style={{ width: '50%' }} className='bookbtn'>Book Appointment</button>
                            </div>
                            <div className="hero2">
                                <img className='hero2img' src={doctor} alt="doctor" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* about us */}

                <div className="aboutus">
                    <div className="aboutuswrap">
                        <div className="about1">
                            <img src={about} alt="about" />
                        </div>
                        <div className="about2">
                            <h2 className='abouthead'>About us</h2>
                            <div className='abouttext'>Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor. Aenean dapibus magna quam, id tincidunt quam placerat consequat. Nulla eu laoreet ex. Vestibulum nec vulputate turpis, id euismod orci. Phasellus consectetur tortor est. Donec lectus ex, rhoncus ac consequat at, viverra sit amet sem. Aliquam sed vestibulum nibh. Phasellus ut lorem pharetra.</div>
                        </div>
                    </div>
                </div>

                {/* our services */}

                <div className="ourservice">
                    <div className="servicehead">Our Service</div>
                    <div className="servicetext">Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor. Aenean dapibus magna quam, id tincidunt quam placerat consequat. Nulla eu laoreet ex. Vestibulum nec vulputate turpis, id euismod orci. Phasellus consectetur tortor est. </div>
                    <div className="serviceitems">
                        <div className="serviceitem">
                            <div className="serviceimg">
                            </div>
                            <div className="serviceitemhead"></div>
                            <div className="serviceitemtext"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
