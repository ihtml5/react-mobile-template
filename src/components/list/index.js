import React, { Component } from 'react';
import VirtualList from 'react-tiny-virtual-list';
import './list.css';
import { getDeviceInfo } from '../../utils';
const data = new Array(20).fill('cc');

export default class VirtualCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '100%'
        }
    }
    getHeight () {
        if (this.state.height === '100%') {
            return 50;
        } else {
            return Math.max(parseInt(this.state.height/this.props.count,10), 40)
        }
    }
    componentDidMount() {
        this.setState({
            height: getDeviceInfo('height'),
            width: getDeviceInfo('width')
        })
        window.onresize = () => {
            this.setState({
                height: getDeviceInfo('height'),
                width: getDeviceInfo('width')
            });
        }
    }
    componentWillUnmount() {
        window.onresize = null;
    }
    render () {
        return (
            <VirtualList
                width= {this.state.width}
                height = {this.state.height}
                itemCount = {data.length}
                scrollOffset = {100}
                scrollToAlignment = {'end'}
                itemSize = {() => {
                    return this.getHeight();
                }}
                renderItem = {
                    ({index, style}) =>
                        <div key={index} style={style} className="Tnm-listItem"> 
                            <div className="Tnm-listItem-desc" style={{height: this.getHeight()}}>
                                <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=972908300,2254145570&fm=173&s=A02AF6B0C6E9070760B939500300C0D8&w=640&h=409&img.JPEG" alt="test"/>
                            </div>
                            <div className="Tnm-listItem-detail" style={{height: this.getHeight()}}>detail</div>
                        </div>
                }
            />
        );
    }
}