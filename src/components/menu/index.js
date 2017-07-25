import React from 'react';
import { Link, IndexLink } from 'react-router';
const Menu = ({activeClassName, menus}) => {
    return (
        <ul className="tnm-nav">
            {menus.map((menu) => {
                if (menu.path === '/' || menu.path === '') {
                    return <li key={menu.path}><IndexLink to={menu.path} activeClassName={activeClassName}>{menu.text}</IndexLink></li>
                }
                return  <li key={menu.path}><Link to={menu.path} activeClassName={activeClassName}>{menu.text}</Link></li>
            } )}
        </ul>
    )
}

export default Menu;