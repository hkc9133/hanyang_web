import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects'
import auth,{authSaga} from './auth/auth';
import spaceRental,{spaceRentalSaga} from './spaceRental/spaceRental';

import {HYDRATE} from 'next-redux-wrapper';
import loading from './loading';

// const reducer = (state = { app: 'init', page: 'init' }, action) => {
//     switch (action.type) {
//         case HYDRATE:
//             if (action.payload.app === 'init') delete action.payload.app;
//             if (action.payload.page === 'init') delete action.payload.page;
//             return state;
//         case 'APP':
//             return { ...state, app: action.payload };
//         case 'PAGE':
//             return { ...state, page: action.payload };
//         default:
//             console.log("=====")
//             console.log(action.type)
//             console.log(action)
//             console.log("=====")
//             return state;
//     }
// };

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action, state);
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                auth,spaceRental,loading
            })
            return combinedReducer(state, action);
        }
    }
};
// const reducer = (state, action) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state, // use previous state
//             ...action.payload, // apply delta from hydration
//         }
//         if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
//         return nextState
//     } else {
//         return rootReducer(state, action)
//     }
// }

// const rootReducer = (state, action) => {
//     console.log("```")
//     console.log(action)
//     console.log("```")
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state, // use previous state
//             ...action.payload, // apply delta from hydration
//         }
//         if (state.count) nextState.count = state.count // preserve count value on client side navigation
//         return nextState
//     } else {
//         return combineReducers({auth,company,member,commute,schedule,loading})
//     }
// }
export function* rootSaga(){
    yield all ([authSaga(),spaceRentalSaga()]);

}

export default rootReducer;
