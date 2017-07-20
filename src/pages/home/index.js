import React from 'react';
import VirtualCom from './components/list';
const Home = ({userName}) => {
    return (
    <div className="tnm-home">
        <VirtualCom count={12}/>
    </div>)
};


export default Home;