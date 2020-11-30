import { createWrapper } from 'next-redux-wrapper';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer, {rootSaga} from './index';
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import {HYDRATE} from 'next-redux-wrapper';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware(); // 리덕스 사가 생성
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
    store.sagaTask = sagaMiddleware.run(rootSaga); // store에 rootSaga를 넣은 sagaMiddleware를 실행시켜준다.
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: true
});

export default wrapper;
