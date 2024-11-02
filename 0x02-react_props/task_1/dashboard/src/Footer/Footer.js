import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils';
import './Footer.css'

const Footer = () => {
    return ( 
        <div className='App-footer'> Copyright {getFooterCopy()} - {getFullYear()}</div>
     );
}
 
export default Footer;