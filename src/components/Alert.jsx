import React from 'react';
import PropTypes from 'prop-types';
import './css/alert.css';
const handleMulipleError = (msg=[])=>(
    <ul>
        {
        msg.map((err,index)=>(<li key={index}><i className="fa fa-exclamation-triangle">{err}</i></li>))
        }
    </ul>
);

const Alert = ({error,onClose,...props})=>{
    let {msg,type,code} = error;
    if(!msg) return null;
    return (<div className={"alert alert-dismissible alert-"+code}>
        <button type="button" className="close" onClick={()=>{onClose("")}}>&times;</button>
        <strong>{type}</strong>{typeof msg ==='object' ? handleMulipleError(msg) : msg}
    </div>);
};

Alert.defaultProps = {
    error:{
        msg:"",
        type:"Error !",
        code:"danger"
    },
    onClose:() => null
};

Alert.propTypes = {
    error:PropTypes.any,
    onClose:PropTypes.func
};

export default Alert;