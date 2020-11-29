import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects'
import auth,{authSaga} from './auth/auth';
import company,{companySaga} from './company/company';
import member,{memberSaga} from './member/member';
import commute,{commuteSaga} from './commute/commute';
import schedule,{scheduleSaga} from './schedule/schedule';
import {HYDRATE} from 'next-redux-wrapper';


import loading from './loading';

const rootReducer = combineReducers({
    auth,company,member,commute,schedule,loading
})


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
    yield all ([authSaga(),companySaga(),memberSaga(),commuteSaga(),scheduleSaga()]);

}

export default rootReducer;
