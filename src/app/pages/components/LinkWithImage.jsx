import React from 'react';
import {Link} from 'react-router-dom';

const LinkWithImage = (props) => {
    let {link,img,alt,...rest} = props;
    return <Link to={link || '#'} {...rest} ><img src={img} alt={alt} /></Link>
};

LinkWithImage.defaultProps = {
    link:"#",
    img:null,
    alt:""
};

export default LinkWithImage;