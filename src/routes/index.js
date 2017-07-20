const rootRoute = {
  childRoutes: [ {
    path: '/',
    indexRoute: require('./home').default,
    component: require('../app').default,
    childRoutes: [
        require('./detail').default,
        require('./home').default
    ]
  }]
}

export default rootRoute;