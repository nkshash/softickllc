import React from 'react';
import {Link} from 'react-router-dom';

const Logo = (props) => {
    let {title,img,alt} = props;
    return(img ? <h1><strong><Link to="/"><img src={img} alt={title||'site-logo'} /></Link></strong></h1>
    :<h1><strong><Link to="/">{title}</Link></strong></h1>);
}

Logo.defaultProps = {
    title:"Softick LLC",
    img:null
};

export default Logo;
