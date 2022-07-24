import React from 'react';
import {LinkWithImage, WrapperSection} from './components/Index.jsx';
import technical_slider from '../../../public/images/iq/about-us-slider.jpg';
import pic from '../../../public/images/pic02.jpg';

class TechnicalSummary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            technicalSummary:[{
                title: "Key experience",
                image: pic,
                items:[
                    {name: "Embedded Software" },
                    {name: "Linux Device Drivers" },
                    {name: "Remote weapon system" },
                    {name: "Tactical Communication" },
                    {name: "Satellite communication" },
                    {name: "Cyber Security" },
                    {name: "IoT" },
                    {name: "Avionics systems" },
                    {name: "Automation" },
                    {name: "Artificial intelligence" },
                    {name: "AWS" },
                    {name: "Scrum Product Owner" },
                    {name: "Agile methodology" },
                    {name: "Project management" },
                    {name: "White Paper for solicitations" },
                    {name: "Research and development " }
                ]
            },
            {
                title: "Programming languages",
                image: pic,
                items:[
                    {name: "C/C++" },
                    {name: "Python" },
                    {name: "JavaScript, Angular, ReactJs" },
                    {name: "Assembly" },
                    {name: "ASP.net" },
                    {name: "SQL database" }
                ]
            },
            {
                title: "Protocols",
                image: pic,
                items:[
                    {name: "TCP/IP, UDP" },
                    {name: "ADS-B" },
                    {name: "I2C" },
                    {name: "SPI" },
                    {name: "UART" }
               ]
            },
            {
                title: "Operating Systems",
                image: pic,
                items:[
                    {name: "Linux " },
                    {name: "Vxworks" },
                    {name: "UC-OS||" },
                    {name: "Windows (IIS)" },
                    {name: "VMware" }
                ]
            }]
        };
    }
    
    render(){
        const {technicalSummary} = this.state;
        return(
            <WrapperSection>
                <LinkWithImage link="#" className="image fit" img={technical_slider} alt="technical_slider" />
                <h3>Technical Summary</h3><hr />
                <div class="row uniform 50%">
                {
                technicalSummary.length ? 
                    technicalSummary.map((item,index)=>(
                       <div key={index} className="3u 6u(meduim) 6u(small) 12u(xsmall)">
               <h4><u>{item.title}</u></h4>
                        { 
                            item['items'] && item['items'].length ?
                            <ul>
                                { item['items'].map((item,index)=>(<li key={index}>{item.name}</li>)) }
                            </ul>
                            : null 
                        }
                        </div>
                    )) : null
                }
               </div>
            </WrapperSection>
        )
    }
};

export default TechnicalSummary;






