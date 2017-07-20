import React from 'react';
import './header.css';
const Header = ({userName}) => {
    return (
        <div className="tnm-header">
            <h1 className="tnm-logo"><a href="//xw.qq.com/">腾讯网</a></h1>
            { userName ? <span className="tnm-global-user">{userName}</span>
            : <span className="tnm-global-login">登录</span>
            }
        </div>
    );
}

export default Header;