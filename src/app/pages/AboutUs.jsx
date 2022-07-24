import React from 'react';
import {LinkWithImage, WrapperSection} from './components/Index.jsx';
import about_slider from '../../../public/images/iq/home-slider1.jpg';

class AboutUs extends React.Component{
    
    render(){
        return(
            <WrapperSection>
                <LinkWithImage link="#" className="image fit" img={about_slider} alt="about_slider" />
                <header>
                    <h4>About Softick LLC</h4>
                </header>
                <p>Softick LLC specializes in developing software for embedded processors,
                either working on an hourly basis or completing fixed-price contracts.
                We have a very strong background in C, C++, Python and have experience
                with a large range of target systems including the ARM, Motorola 68xxx
                family, AMD, INTEL, 80x86, and 8051. We have developed software using
                a variety of Windows and UNIX based tool sets and have benefited from
                exposure to many embedded Operating Systems including commercial products
                such as uC/OS-II, pSOS+, RTXC and Nucleus RTX, as well as several proprietary systems.</p>

                <p>We have developed Linux device drivers for embedded systems for Satellite
                communications, RFID products as well as Cyber Security products.</p>

                <p>The projects that we have undertaken have involved the development
                of software and ICD for proprietary protocols, as well as TCP/IP,
                socket communication, IOT protocols (MQTT).</p>

                <p>We have also developed Test automation suit to test and calibrate
                satellite communication-based products.</p>
            </WrapperSection>
        )
    }
};

export default AboutUs;

