import React from 'react';
import { Link, IndexLink } from 'react-router';
const Menu = ({activeClassName}) => {
    console.log('menu', this.props);
    return (
        <ul className="tnm-nav">
            <li><IndexLink to="/" activeClassName={activeClassName}>首页</IndexLink></li>
            <li><Link to="/detail" activeClassName={activeClassName}>详情页</Link></li>
        </ul>
    )
}

export default Menu;