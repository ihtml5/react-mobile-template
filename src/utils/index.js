<<<<<<< HEAD
export const getDeviceInfo = (name) => {
    const infoMap = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }
    return infoMap[name.toString()];
=======
/*
 elm: dom节点
 prop: 属性值
 desc: 获取应用到当前dom的样式值
*/
import { TRANSPARENTRGBA, WHITE } from '../constants/color';
const getStyle = (elm, prop) => {
    if (elm.nodeType !== 1 || !elm || !prop) {
        return;
    } 
    const styleValue = elm.currentStyle ? elm.currentStyle[prop] : document.defaultView.getComputedStyle(elm,null)[prop];
    return styleValue === TRANSPARENTRGBA ? WHITE : styleValue; 
}

export {
    getStyle
>>>>>>> 301af4e0bb91f4df0803ae7c9c056d49e93561c2
}