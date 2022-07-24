import React from 'react';
import {LinkWithImage, WrapperSection} from './components/Index.jsx';

const _scrollEventListener = function(event){
        let scroll = this.scrollY;
        if(scroll<50){
            $('#header').addClass('alt');
        }else{
            $('#header').removeClass('alt');
        }
    };
    
class Home extends React.Component{
    componentDidMount(){
        $('body').addClass('landing');
        $('#header').addClass('alt');
        window.addEventListener('scroll',_scrollEventListener);
    }
    
    
    
    componentWillUnmount(){
        $('body').removeClass('landing');
        $('#header').removeClass('alt');
        window.removeEventListener('scroll',_scrollEventListener);
    }
    
    render(){
        return(
            <React.Fragment>
                <section id="banner">
                    <h2>Softick LLC</h2>
                    <p>Embedded Solutions from Softick LLC</p>
                    <ul className="actions">
                        <li><a href="#" className="button special big">Get Started</a></li>
                    </ul>
                </section>
                <WrapperSection style={{marginTop:'20px'}}>
                    <header className="" style={{textAlign:'center'}}>
                        <h2>Softick LLC</h2>
                        <p>Embedded Solutions from Softick LLC</p>
                    </header>		
                    <p>Softick LLC provides a range of services, we can take your
                    product through the complete life-cycle, from prototype to production
                    in a timely cost-effective manner. We can also provide you with
                    consultants to work along side your engineers to help you meet
                    your deadlines.</p>
                </WrapperSection>
            </React.Fragment>
        )
    }
};

export default Home;
