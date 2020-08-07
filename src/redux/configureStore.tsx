/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers';

/** redux-saga */
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middleWares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...(middleWares))];
    const store = createStore(rootReducers, composeWithDevTools(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
