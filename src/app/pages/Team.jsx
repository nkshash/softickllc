import React from 'react';
import {LinkWithImage, WrapperSection} from './components/Index.jsx';
import team_slider from '../../../public/images/iq/about-us-slider.jpg';
import profile1 from '../../../public/images/iq/profile1.jpg';
import profile2 from '../../../public/images/iq/profile2.jpg';

class Team extends React.Component{
    
    render(){
        return(
            <WrapperSection>
                <LinkWithImage link="#" className="image fit" img={team_slider} alt="team_slider" />
                <div>
                <h4><u>Profile</u></h4><hr />
                    <div>
                        <h4>Harshad Poshtiwala</h4>
                        <h5>President</h5>
                        <p>Harshad has over 14 years of experience in the design
                        and development of a satellite system, consumer electronics
                        system, Cyber Security system, Avionics system, Cellular
                        communication system, Website applications, Mobile application
                        as well as automobile systems. He specializes in STM32 based systems,
                        DSPs, BSPs, bootloaders, Flash file systems, and Linux internals.
                        Besides the above technologies Harshad has experience with
                        Cisco Networking devices (Layer 2, Layer 3).<br /> 
                        Harshad has worked with both State level agencies (MD DOIT and CCU)
                        as well as the US government (DOD, Navy, and Airforce ) on various programs.
                        Harshad is also a Certified Scrum Product Owner.</p>
                    </div>
                </div>
            </WrapperSection>
        )
    }
};

export default Team;




