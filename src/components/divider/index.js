import React from 'react';
import './divider.css'
import { getStyle } from '../../utils';
const Divider = ({text}) => {
    return (
        <div className="tnm-divider">
            <span className="tnm-divider-text" style={{
                backgroundColor: getStyle(document.body, 'backgroundColor')
            }}>
                {text}
            </span>
            <div className="tnm-divider-line"></div>
        </div>
    );
}

export default Divider;