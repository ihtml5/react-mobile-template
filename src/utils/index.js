export const getDeviceInfo = (name) => {
    const infoMap = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }
    return infoMap[name.toString()];
}