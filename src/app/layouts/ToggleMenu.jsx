import React from 'react';
import {Link} from 'react-router-dom';

const ToggleMenu = () => (<Link to="#menu" className="navPanelToggle"><span className="fa fa-bars"></span></Link>);

export default ToggleMenu;