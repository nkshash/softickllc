import React from 'react';
import {LinkWithImage, WrapperSection} from './components/Index.jsx';
import {Alert} from '../../components/Index.jsx';
import cantact_slider from '../../../public/images/iq/about-us-slider.jpg';
import * as validator from '../../lib/validator';
import {sendContactInfo} from '../../api/contactApi';

const _valiadtionRule = {
    firstName:{
        isRequired:{message: "please enter first name."},
        isRegexMatch:{message: "First name should contain aplhabatic characters only.",regex: /^[a-zA-Z ]*$/}
    },
    lastName:{
        isRequired:{message: "please enter first name."},
        isRegexMatch:{message: "Last name should contain aplhabatic characters only.",regex: /^[a-zA-Z ]*$/}
    },
    email:{
        isRequired:{message: "please enter email."},
        isEmail:{message: "enter valid email type."}
    },
    mobile:{
        isRequired:{message: "please enter conatct number."},
    }
};

class ContactUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contactInfo:{
                firstName: "",
                lastName: "",
                email: "",
                mobile: "",
                message: "",
                isNoRobot: false
            },
            error:{
                msg:"",
                type:"Error !",
                code:"danger"
            },
            showButton:false
        };
    }
    
    _resetError = (msg = "") => {
        let {error} = this.state;
        error.msg = msg;
        error.type ="Error !";
        error.code = "danger";
        this.setState({error});
    }
    
    _resetFormData = () => {
        return {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            message: "",
            isNoRobot: false
        };
    }
    
    _handleApiSuccess = () => {
        let {contactInfo,showButton,error} = this.state;
        contactInfo = this._resetFormData();
        error.msg = "Successfully submited.";
        error.type = "Success !";
        error.code = "success";
        showButton = true;
        this.setState({contactInfo,error,showButton});
        setTimeout(()=>{
            this._resetError("");
        },3000);
    }
    
    _validateFormData = (field,value,fieldValidation) => {
        let errors = [];
        for(let key in fieldValidation){
            let _fieldConfig = fieldValidation[key];
            if (typeof _fieldConfig === 'string') {
                _fieldConfig = { message: _fieldConfig };
            }
            let configValidator = validator[key](_fieldConfig);
            let errorMessage = configValidator(value);
            console.log(errorMessage);
            errorMessage ? errors.push(errorMessage) : null;
        }
        return errors;
    }
    
    _onInputChange = (event) => {
        const target = event.target;
        let _name = target.name;
        let _value = target.type == 'checkbox' ? target.checked :target.value;
        this.setState(prevState => ({
            contactInfo:{...prevState.contactInfo,[_name]:_value}
        }));
    }
    
    _onContactFormSubmit = (event) => {
        event.preventDefault();
        let {contactInfo,error,showButton} = this.state;
        let errors = [];
        for(let key in contactInfo){
            let _value = contactInfo[key];
            let validation = _valiadtionRule[key];
            errors = [...errors,...this._validateFormData(key,_value,validation)];
        }
        if(errors.length){
            error.msg = errors;
            showButton: false,
            this.setState({error,showButton});
            return false;
        }
        //make rest api
        sendContactInfo(contactInfo).then(data=>{
            if(data.status==101){
                this._handleApiSuccess();
            } else {
               this._resetError(data.message); 
            }
        }).catch(err => {
            this._resetError("Some exception has been occur.");
        });
    }
    
    render(){
        const {contactInfo,error,showButton} = this.state;
        console.log(error);
        return(
                <React.Fragment>
        <WrapperSection>
    <div className="row">
    <div className="12u$">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.377783259209!2d-77.26351508514416!3d39.23429503462109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b62bb5d0808253%3A0x773856d2b6e8f69!2s23103%20Turtle%20Rock%20Terrace%2C%20Clarksburg%2C%20MD%2020871%2C%20USA!5e0!3m2!1sen!2sin!4v1566843125367!5m2!1sen!2sin"
        width="100%" 
        height="350" 
        frameBorder="0" 
        style={{border:0}} allowFullScreen=""></iframe></div>
        </div>
        </WrapperSection>
            <WrapperSection>
                <header className="">
                <h4><u>Contact Softick LLC</u></h4>
                </header>
                <div className="row uniform 50%">
                <div className="3u 5u$(medium) 12u$(xsmall)">
                <address>
                <i className="fa fa-industry"></i> Softick LLC<br />
                <i className="fa fa-map-marker"></i> 23103 Turtle Rock Terrace, Clarksburg, MD 20871, United States<br />
                <i className="fa fa-phone"></i> +1 5516894433<br />
                <i className="fa fa-envelope"></i> harshad@softickllc.com<br />
                </address>
                </div>
                <div className="9u 7u$(medium) 12u$(xsmall)">
                <Alert error={error} onClose={this._resetError}/>
                <form onSubmit={this._onContactFormSubmit}>
                    <div className="row uniform 50%">
                        <div className="6u 12u$(xsmall)">
                            <input 
                            type="text" 
                            name="firstName" 
                            id="firstName" 
                            required 
                            value={contactInfo.firstName} 
                            onChange={this._onInputChange} 
                            placeholder="First Name*" />
                        </div>
                        <div className="6u 12u$(xsmall)">
                            <input 
                            type="text" 
                            name="lastName" 
                            required 
                            id="lastName" 
                            value={contactInfo.lastName} 
                            onChange={this._onInputChange} 
                            placeholder="Last Name*" />
                        </div>
                        <div className="6u 12u$(xsmall)">
                            <input 
                            type="text" 
                            name="email" 
                            required 
                            id="email" 
                            value={contactInfo.email} 
                            onChange={this._onInputChange} 
                            placeholder="Email*" />
                        </div>
                        <div className="6u 12u$(xsmall)">
                            <input 
                            type="text" 
                            name="mobile" 
                            id="mobile" 
                            value={contactInfo.mobile} 
                            onChange={this._onInputChange} 
                            placeholder="Contact(optional)" />
                        </div>
                        <div className="12u$">
                            <textarea 
                            name="message" 
                            id="message" 
                            value={contactInfo.message} 
                            onChange={this._onInputChange} 
                            placeholder="Comments (optional)" 
                            rows="6"></textarea>
                        </div>
                        <div className="6u$ 12u$(small)">
                            <input 
                            type="checkbox"
                            id="isNoRobot" 
                            required 
                            name="isNoRobot" 
                            onChange={this._onInputChange} 
                            checked={contactInfo.isNoRobot} />
                            <label htmlFor="isNoRobot">I am a human and not a robot</label>
                        </div>
                        <div className="12u$">
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" className="special" /></li>
                                <li><input type="reset" value="Reset" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            </WrapperSection>
            </React.Fragment>
        )
    }
};

export default ContactUs;


