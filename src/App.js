import React, { Component } from 'react';

//import using commonJS Module *Require Plugins
//import { Button } from 'react-weui'

//import Using ES6 syntax
import WeUI from 'react-weui';

//import styles
import 'weui';
import 'react-weui/lib/react-weui.min.css';

const {Button} = WeUI;

class App extends Component {
    render() {
        return (
            <Button type="primary">hello wechat</Button>
        );
    }
}


export default App;