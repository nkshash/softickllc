import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes.jsx';
//importing css
import '../../public/css/main.css';
import '../../public/css/style.css';

const App = ()=>(
    <Router>
        <Routes />
    </Router>    
    );
    
require.ensure(['../../public/js/jquery.min.js'],require=>{
    window.$ = window.jQuery = require('../../public/js/jquery.min.js');
    window.skel = require('../../public/js/skel.min.js');
    require('../../public/js/util.js');
    require('../../public/js/main.js');
    ReactDOM.render(<App />, document.getElementById('root'));
});