import { all, takeLatest, call, put, delay } from 'redux-saga/effects'
import { fetchUsersFailure, fetchUsersSuccess } from './slice'

import axios from 'axios'

//API USERS: https://jsonplaceholder.typicode.com/users/

function* fetchUsers(){
    try{
        yield delay(2000)

        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
        // console.log(response.data)
        yield put(fetchUsersSuccess(response.data))

    }catch (error){
        // console.log(erro)
        yield put(fetchUsersFailure(error.message))
    }
}

export default all([
    takeLatest("cart/fetchUsers", fetchUsers)
])