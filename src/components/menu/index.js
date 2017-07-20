import React from 'react';
import { Link, IndexLink } from 'react-router';
const Menu = ({activeClassName}) => {
    return (
        <ul className="tnm-nav">
            <li><IndexLink to="/" activeClassName={activeClassName}>首页</IndexLink></li>
            <li><Link to="/detail" activeClassName={activeClassName}>证券</Link></li>
        </ul>
    )
}

export default Menu;