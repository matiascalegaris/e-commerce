import { takeLatest, put, all, call } from 'redux-saga/effects';
import { googleProvider, auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure } from './user.actions';
import UserActionTypes from './user.types';

export function* getSnapShotFromUserAuth(user) {
  const userRef = yield call(createUserProfileDocument, user);
    const snapShot = yield userRef.get();
    yield put(signInSuccess(snapShot));
    console.log( {id: snapShot.id, ...snapShot.data()});
}

export function* signInWithGoogle() {
  try {
    const { user }  = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
    console.log(error);
  }
}

export function* signInWithEmail( {payload: {email, password}}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmail
  )
}

export function* onGoogleSignInStart() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGN_IN_START,
    signInWithGoogle
  )
}

export function* userSagas() {
  yield all( [
    call(onGoogleSignInStart),
    call(onEmailSignInStart)
  ])
}