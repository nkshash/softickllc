import React from 'react';
import {LinkWithImage, WrapperSection} from './components/Index.jsx';
import {titleCase} from '../../utility';
import project_slider from '../../../public/images/iq/home-slider1.jpg';
import futura_cyber from '../../../public/images/company/futura.jpg';
import jet_system from '../../../public/images/company/jet_system.png';
import ags_logo from '../../../public/images/company/ags-logo.png';
import maryland_logo from '../../../public/images/company/maryland.png';
import smartsky_logo from '../../../public/images/company/SmartSky-logo.png';
import maxtena_logo from '../../../public/images/company/maxtena.png';

class Project extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[{
                title:"Futura cyber",
                image:futura_cyber,
                description:"Developing next generation security architecture for self encrypting drive."
            },{
                title:"Jet Systems",
                image:jet_system,
                description:"Developing ADS-B message parser system for next generation research project for DoD."
            },{
                title:"AGS",
                image:ags_logo,
                description:"Developing sensor network for aircraft pods (DoD)"
            },{
                title:"Department of IT State of Maryland",
                image:maryland_logo,
                description:"Design and develop Centeral Collection Unit (CCU) website."
            },{
                title:"SmartSky Network",
                image:smartsky_logo,
                description:"Designed and developed ground station controller for \n\
                    4G LTE traffic testing for private Jet using Aircraft based radio(ABR).The design \n\
                    and work is approved by the FAA."
            },{
                title:"Maxtena",
                image:maxtena_logo,
                description:"Designed and developed test automation suit for satellite product\n\
                   (Thales's MissionLink) for flashing software images, calibration of gain and phase of onboard\n\
                   antennas and verification using Python and command expert."
            }]
        };
    }
    
    render(){
        const {projects} = this.state;
        return(
            <WrapperSection>
                <LinkWithImage link="#" className="image fit" img={project_slider} alt="project_slider" />
                <header className="">
                    <h4>Our recent customers include</h4>
                </header>
                <div className="container 75%">
                { 
                    projects.length ?
                        projects.map((item,index) => (<div key={index} className="row 200%">
                        <div  className="5u 12u$(medium)">
                            <header className="major">
                                <h5>{titleCase(item.title)}</h5>
                                <div className="image-holder">
                                    <img src={item.image} alt={item.title} className="img-custom" />
                                </div>
                                </header>
                        </div>
                        <div className="7u$ 12u$(medium)">
                        <p>{item.description}</p>
                        </div>
                    </div>)) 
                        : null
                }
                </div>
            </WrapperSection>
        )
    }
};

export default Project;



