import { applyMiddleware, compose, createStore } from 'redux'

//MIDDLEWARE
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middleware/logger'

//ENHANCER
// import monitorReducersEnhancer from './enhancers/monitorReducers'

//ROOT REDUCER
import rootReducer from './rootReducer'

export default function configureStore(preloadedState) {

    //APPLY MIDDLEWARES
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    //THEN ENHANCERS
    // const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const enhancers = [middlewareEnhancer]

    //THEN COMPOSE
    const composedEnhancers = compose(...enhancers) 

    //THEN CREATESTORE WITH ROOTREDUCER,MIDDLEWARE,ENHANCERS
    const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}