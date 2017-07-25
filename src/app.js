import React from 'react';
import Header from './components/header';
import Menu from './components/menu';
import MENUS from './mock/menu';

const App = ({children}) => (<div className="tnm-app">
    <Header userName="智宇纵横"/>
    <Menu activeClassName={'tnm-active-link'} menus={MENUS}/>
    {children}
</div>);


export default App;
