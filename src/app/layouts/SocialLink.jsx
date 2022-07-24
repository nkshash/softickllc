import React from 'react';
import PropTypes from 'prop-types';

const SocialLink = ({socialList}) => (
    socialList.length ?
        <ul className="icons">
            {
            socialList.map((item,index) => (<li key={index}><a href={item.link || '#'} className={item.icon}></a></li>))
            }
        </ul>
        :null
);

SocialLink.defaultProps = {
    socialList:[]
};

SocialLink.propTypes = {
    socialList:PropTypes.arrayOf(PropTypes.shape({
        icon:PropTypes.string.isRequired,
        link:PropTypes.string
    })).isRequired
};

export default SocialLink;
