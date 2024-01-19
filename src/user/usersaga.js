import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { getUserErrorAction, getUserSuccessAction ,getUserAction} from "./userslice";


// Generator function
function* getUserSaga( payload) 
    {
  try {
    // You can also export the axios call as a function.
    const response= yield axios.get(`https://jsonplaceholder.typicode.com/users`);
    yield put(getUserSuccessAction(response.data));
  } catch (error) {
    yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchGetUser() {
  yield takeLatest(getUserAction, getUserSaga);
}