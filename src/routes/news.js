export default {
    path: 'news',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
        // 在后面加 .default
        cb(null, require('../pages/').News)
    }, 'news');
   }
}