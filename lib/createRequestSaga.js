import {call, put,fork} from 'redux-saga/effects'
import {startLoading, finishLoading} from "../store/loading";
import React from 'react';

export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE]
}

export default function createRequestSaga(type, request) {

    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;



    return function*(action){

        yield put(startLoading(type));
        try{
            const response = yield call(request, action.payload)
            console.log("==")
            console.log(response.data,SUCCESS)
            console.log("==")
            yield put({
                type:SUCCESS,
                payload:response.data,
            })
        }catch(e){
            console.log("====ERROR 발생====")
            console.log(e)
            console.log(e.response)
            console.log(e.code)
            console.log("====ERROR 발생====")

            const error = {
                response:{
                    data:"문제가 발생했습니다."
                }
            }

            if(type != 'auth/AUTH_CHECK' && e.response.status == 401){
                yield put({
                    type:'auth/INITIALIZE',
                    payload:error,
                    error:true,
                })
            }

            if(e.response.status == 403){
                yield put({
                    type:'company/INITIALIZE_COMPANY',
                    payload:error,
                    error:true,
                })
                yield call(permitAlert);
            }

            if(e.code == 'ECONNABORTED'){
                yield put({
                    type:FAILURE,
                    payload:error,
                    error:true,
                })
            }else{
                yield put({
                    type:FAILURE,
                    payload:e,
                    error:true,
                })
            }

        }
        yield put(finishLoading(type))
    }
}