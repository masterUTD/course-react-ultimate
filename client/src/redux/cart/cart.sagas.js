import { all, put,call ,takeLatest } from 'redux-saga/effects';

import UserActionTypes  from '../user/user.types';

import { clearCart } from './cart.actions';


export function* clearCartOnSignOut() {
    yield put(clearCart())

}

export function* onSignOutSuccess () {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut ) // aqui estamos ecuchando a que el signout sea exitoso 

}

export function* cartSagas() {
    yield all( [ call(onSignOutSuccess)] )

}