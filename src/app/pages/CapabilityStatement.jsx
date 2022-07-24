import React from 'react';
import {LinkWithImage, WrapperSection} from './components/Index.jsx';
import technical_slider from '../../../public/images/iq/about-us-slider.jpg';
import pic from '../../../public/images/pic02.jpg';

class CapabilityStatement extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            technicalSummary:[{
                title: "Key Experience",
                image: pic,
                items:[
                    {name: "Embedded Software" },
                    {name: "Data Communications" },
                    {name: "Satellite Communications" },
                    {name: "Device Drivers and Hardware Interfaces" },
                    {name: "Structured Design Methods" },
                    {name: "FIPS 140-2 Approvals" },
                    {name: "User Interfaces / MMI" },
                    {name: "Database Systems" },
                ]
            },{
                title: "Programming Languages",
                image: pic,
                items:[
                    {name: "C, C#, C++" },
                    {name: "pascal" },
                    {name: "Assembler" },
                    {name: "micro-code" },
                    {name: "dBASE" },
                    {name: "Basic" },
                    {name: "FoxPro" },
                    {name: "Clipper" }
                ]
            },{
                title: "Processors",
                image: pic,
                items:[
                    {name: "ARM" },
                    {name: "PIC" },
                    {name: "Rabbit" },
                    {name: "Intel IXP1200" },
                    {name: "Motorola 68xxx Family" },
                    {name: "Intel 80x86 Family" },
                    {name: "Intel i960" }
                ]
            },{
                title: "Protocols",
                image: pic,
                items:[
                    {name: "OSI seven layer model" },
                    {name: "OSI seven layer model" },
                    {name: "HDLC, X.25" },
                    {name: "TCP/IP" },
                    {name: "UDP" },
                    {name: "USB" },
                    {name: "SNA, Proprietary Protocols" },
                    {name: "SCSI" },
                    {name: "SNMP" },
                    {name: "ISDN" },
                    {name: "PPP" },
                    {name: "IEEE 488 control bus" }
                ]
            },{
                title: "Operating System",
                image: pic,
                items:[
                    {name: "uC/OS-II" },
                    {name: "Unix" },
                    {name: "pSOS+" },
                    {name: "VxWorks" },
                    {name: "RTXC" },
                    {name: "Custom Multi-tasking executives" }
                ]
            },{
                title: "Development Environments",
                image: pic,
                items:[
                    {name: "Windows" },
                    {name: "Cross-Development Environments" },
                    {name: "Visual Studio" },
                    {name: "Unix" },
                    {name: "SUN Workstations" },
                    {name: "VAX / VMS" }
                ]
            }]
        };
    }
    
    render(){
        const {technicalSummary} = this.state;
        return(
            <WrapperSection>
            <h3><u>Capability Statement</u></h3>
            <LinkWithImage link="#" className="image fit" img={technical_slider} alt="technical_slider" />
                <header><h4>Overview</h4></header>
                <p>Softick LLC provides strategic consulting technology services
                and managed services to commercial, not for profit and government
                organizations. Our Consulting can mobilize the right people, skills,
                and technologies to help organizations improve their performance.</p>

                <p>As a Minority Owned Small Business, Softick LLC is committed to
                excellence and creating innovative and flexible solutions for our
                State and Federal clients.</p>

                <p>What sets Softick LLC apart from the competition?</p>

                <ul>
                    <li>Our People</li>
                    <li>Performance-Based Processes</li>
                    <li>Integrated Solutions Teams</li>
                    <li>Client Relationship Management</li>
                    <li>Strategic Mix of Technology and Business</li>
                </ul>

                <header><h4>Core Capabilities</h4></header>
                <p>Our technology experts and business professionals analyze research,
                design and implement solutions in the areas of:</p>

                <ul>
                    <li>Consulting</li>
                    <li>Technology</li>
                    <li>Managed Services</li>
                </ul>

                <header><h4>Consulting</h4></header>
                
                <p>Our Consulting Services focus on integrated solutions designed to
                enhance the performance of your business. By incorporation industry
                best practices into your business processes and management strategies,
                we can help you stay ahead of the competition and better serve your
                customers. Our services include:</p>

                <ul>
                    <li>Business Strategy & Planning Support</li>
                    <li>Change Management & Facilitation Support</li>
                    <li>CMMI Process Development and Assessment Services</li>
                    <li>Security Assessment</li>
                    <li>Financial/Statistical Analysis</li>
                    <li>Training</li>
                </ul>

                <header><h4>Technology</h4></header>

                <p>Our Technology Services focus on developing robust, secure and
                stable technology solutions for your business. By incorporating 
                common sense solutions into seemingly daunting deliverables, we
                can ensure at the start of the project that we will safely deliver
                the product to completion. Our services include:</p>
 
                <ul>
                    <li>Application & Web, Design & Development</li>
                    <li>Networking, Cellular Communication, and Satellite Communication</li>
                    <li>Remote weapon system, Avionics, and sensor-based system</li> 
                    <li>IoT</li> 
                    <li>RF communication and Embedded system</li>
                    <li>Commercial Off the Shelf (COTS) Integration</li>
                    <li>Database Design, Development, & Maintenance</li>
                    <li>Architecture Solutions</li>
                    <li>Verification & Validation Service</li>
                    <li>Software/Hardware design, development, testing, integration, and manufacturing.</li>
                </ul>

                <header><h4>Federal Certification</h4></header>

                <ul>
                    <li>None (We are a beginner in this space, we have private sector clients)</li>
                </ul>

                <header><h4>Contract Vehicles</h4></header>

                <ul>
                    <li>None  (We are a beginner in this space, we have private sector clients)</li>
                </ul>

                <header><h4>State Certifications</h4></header>

                <ul>
                    <li>None  (We are a beginner in this space, we have private sector clients</li>
                </ul>

                <header><h4>Sample – Major Clients</h4></header>

                <table>
                    <thead>
                    <tr>
                        <th>Commercial</th>
                        <th>Government</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Maxtena Inc</td><td>Maryland Department of  IT/ Central Collection Unit (CCU)</td>
                    </tr>
                    <tr>
                        <td>AGS LLC</td><td></td>
                    </tr>	
                    <tr>
                        <td>Futura Cyber</td><td></td>
                    </tr> 
                    <tr>
                        <td>DCMobility Holdings LLC<br />
                            SmartSky Networks</td><td></td>	
                    </tr>
                </tbody>
                </table>


                <header><h4>North American Industry Classification System (NAICS)</h4></header>

                <table>
                <tbody>
                <tr><td>334614</td><td></td><td>Software and Other Prerecorded Compact Disc, Tape, and Record Reproducing</td></tr>
                <tr><td>423430</td><td></td><td>Computer and Computer Peripheral Equipment and Software Merchant Wholesalers</td></tr>
                <tr><td>511210</td><td>Yes</td><td>Software Publishers</td></tr>
                <tr><td>515111</td><td></td><td>Radio Networks</td></tr>
                <tr><td>541330</td><td></td><td>Engineering Services</td></tr>
                <tr><td>541513</td><td></td><td>Computer Facilities Management Services</td></tr>
                <tr><td>541519</td><td></td><td>Other Computer Related Services</td></tr>
                <tr><td>541690</td><td></td><td>Other Scientific and Technical Consulting Services</td></tr>
                <tr><td>541715</td><td></td><td>Research and Development in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology)</td></tr>
                <tr><td>611420</td><td></td><td>Computer Training</td></tr>
                <tr><td>811212</td><td></td><td>Computer and Office Machine Repair and Maintenance</td></tr>
                <tr><td>811213</td><td></td><td>Communication Equipment Repair and Maintenance</td></tr>
                </tbody>
                </table>

            <header><h4>Product & Service Codes Selected</h4></header>
            <table>
            <thead>
            <tr>
                <th>PSC</th>
                    <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>R425</td>
                    <td>SUPPORT- PROFESSIONAL: ENGINEERING/TECHNICAL</td>
            </tr>
            <tr>
                <td>D310</td>
                    <td>IT AND TELECOM- CYBER SECURITY AND DATA BACKUP</td>
            </tr>
            <tr>
                <td>D317</td>
                    <td>IT AND TELECOM- WEB-BASED SUBSCRIPTION</td>
            </tr>
            <tr>
               <td>D316</td>
               <td>IT AND TELECOM- TELECOMMUNICATIONS NETWORK MANAGEMENT</td>
            </tr>
            <tr>
                <td>7030</td>
                    <td>INFORMATION TECHNOLOGY SOFTWARE</td>
            </tr>
            <tr>
                <td>J070</td>
                    <td>MAINTENANCE, REPAIR, AND REBUILDING OF EQUIPMENT- AUTOMATIC DATA PROCESSING EQUIPMENT (INCLUDING FIRMWARE), SOFTWARE, SUPPLIES AND SUPPORT EQUIPMENT</td>
            </tr>
            <tr>
            <td>L070</td><td>TECHNICAL REPRESENTATIVE- AUTOMATIC DATA PROCESSING EQUIPMENT (INCLUDING FIRMWARE), SOFTWARE, SUPPLIES AND SUPPORT EQUIPMENT</td></tr>
            <tr>
                <td>D319</td>
                    <td>IT AND TELECOM- ANNUAL SOFTWARE MAINTENANCE SERVICE PLANS</td>
            </tr>
            <tr>
                <td>H970</td>
                    <td>OTHER QUALITY CONTROL, TESTING, AND INSPECTION- AUTOMATIC DATA PROCESSING EQUIPMENT (INCLUDING FIRMWARE), SOFTWARE, SUPPLIES AND SUPPORT EQUIPMENT</td>
            </tr>
            <tr>
                <td>H370</td>
                    <td>INSPECTION- AUTOMATIC DATA PROCESSING EQUIPMENT (INCLUDING FIRMWARE), SOFTWARE, SUPPLIES AND SUPPORT EQUIPMENT</td>
            </tr>
            <tr>
                <td>K070</td>
                    <td>MODIFICATION OF EQUIPMENT- AUTOMATIC DATA PROCESSING EQUIPMENT (INCLUDING FIRMWARE), SOFTWARE, SUPPLIES AND SUPPORT EQUIPMENT</td>
            </tr>
            <tr>
               <td>H170</td>
               <td>QUALITY CONTROL- AUTOMATIC DATA PROCESSING EQUIPMENT (INCLUDING FIRMWARE), SOFTWARE, SUPPLIES AND SUPPORT EQUIPMENT</td>
            </tr>
            <tr>
                <td>N070</td>
                    <td>INSTALLATION OF EQUIPMENT- AUTOMATIC DATA PROCESSING EQUIPMENT (INCLUDING FIRMWARE), SOFTWARE, SUPPLIES AND SUPPORT EQUIPMENT</td>
            </tr>
            <tr>
                <td>H270</td>
                    <td>EQUIPMENT AND MATERIALS TESTING- AUTOMATIC DATA PROCESSING EQUIPMENT (INCLUDING FIRMWARE), SOFTWARE, SUPPLIES AND SUPPORT EQUIPMENT</td>
            </tr>
            <tr>
                <td>D318</td>
                    <td>IT AND TELECOM- INTEGRATED HARDWARE/SOFTWARE/SERVICES SOLUTIONS, PREDOMINANTLY SERVICE</td>
            </tr>
            </tbody>
            </table>
            </WrapperSection>
        )
    }
};

export default CapabilityStatement;






