import { TRANSPARENTRGBA, WHITE } from '../constants/color';
const getDeviceInfo = (name) => {
    const infoMap = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }
    return infoMap[name.toString()];
}
/*
 elm: dom节点
 prop: 属性值
 desc: 获取应用到当前dom的样式值
*/
const getStyle = (elm, prop) => {
    if (elm.nodeType !== 1 || !elm || !prop) {
        return;
    } 
    const styleValue = elm.currentStyle ? elm.currentStyle[prop] : document.defaultView.getComputedStyle(elm,null)[prop];
    return styleValue === TRANSPARENTRGBA ? WHITE : styleValue; 
}

export {
    getStyle,
    getDeviceInfo
}