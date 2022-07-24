import React from 'react';

import Header from './Header.jsx';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import SocialLink from './SocialLink.jsx';
import ToggleMenu from './ToggleMenu.jsx';

const socialList = [
    {icon:"icon fa-facebook",link:"#"},
    {icon:"icon fa-twitter",link:"#"},
    {icon:"icon fa-instagram",link:"#"},
];

const navList = [
    {title:"Home",url:"/"},
    {title:"about us",url:"/about-us"},
    {title:"capability statement",url:"/capability-statement"},
    {title:"profile",url:"/profile"},
    {title:"technical summary",url:"/technical-summary"},
    {title:"recent project",url:"/recent-project"},
    {title:"contact us",url:"/contact-us"},
];

class MainLayout extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header>
                    <Logo />
                    <Navigation navList={navList}/>
                </Header>
                <ToggleMenu />
                {this.props.children}
                <Footer>
                    <SocialLink socialList={socialList}/>
                </Footer>
            </React.Fragment> 
        )
    }
};

export default MainLayout;
