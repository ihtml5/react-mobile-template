import React from 'react';
import './listitem.css';
import {Icon} from 'react-fa'
const ListItem = ({item}) => {
    const {detail, desc} = item;
    return (
        <li>
            <div className="tnm-gallery-desc">
                <img className="tnm-img"  alt={desc.alt} src={desc.src}/>
            </div>
            <div className="tnm-gallery-detail">
                <h2>{detail.title}</h2>
                <span className="tnm-gallery-count"><Icon spin name="spinner" />{detail.count}</span>
            </div>
        </li>
    );
}

export default ListItem;