import { createWrapper } from 'next-redux-wrapper';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer, {rootSaga} from './index';
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const bindMiddleware = (middleware) => {
    // if (process.env.NODE_ENV !== 'production') {
    //     return composeWithDevTools(applyMiddleware(...middleware))
    // }
    // return applyMiddleware(...middleware)
    return composeWithDevTools(applyMiddleware(...middleware))
}


const makeStore = ({ isServer }) => {
    const sagaMiddleware = createSagaMiddleware(); // 리덕스 사가 생성
    if (isServer) {
        //If it's on server side, create a store
        const store = createStore(rootReducer, bindMiddleware([sagaMiddleware, logger]));
        store.sagaTask = sagaMiddleware.run(rootSaga)
        return store;
    } else {
        //If it's on client side, create a store which will persist
        const { persistStore, persistReducer, autoRehydrate } = require("redux-persist");
        const storage = require("redux-persist/lib/storage").default;

        const persistConfig = {
            key: "nextjs",
            whitelist: ["auth","spaceRental"],
            storage, // if needed, use a safer storage
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

        const store = createStore(
            persistedReducer,
            {},
            bindMiddleware([sagaMiddleware])
        ); // Creating the store again

        store.sagaTask = sagaMiddleware.run(rootSaga);
        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
};


const wrapper = createWrapper(makeStore, {
    debug: true
});

export default wrapper;
