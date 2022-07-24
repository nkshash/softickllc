import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {titleCase} from '../../utility';

const NavList = ({items,...props}) => (
        <ul {...props}>
        { items.map((item,index) => (<NavItem key={index} item={item} />))}
        </ul>
);

const NavItem = ({item,...props}) => (
        item['child'] && item['child'].length
            ? <NavList items={item.child} />
            : <li><NavLink to={item.url} >{titleCase(item.title)}</NavLink></li>    
    );

const Navigation = ({navList,...props}) => (
    <nav id="nav">
        <NavList items={navList} />
    </nav>
);

Navigation.defaultProps = {
    navList:[]
};

Navigation.propTypes = {
    navList:PropTypes.arrayOf(PropTypes.shape({
        title:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        child:PropTypes.array
    })).isRequired
};

export default Navigation;
