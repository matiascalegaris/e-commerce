import { takeLatest, put, all, call } from 'redux-saga/effects';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure } from './user.actions';
import UserActionTypes from './user.types';

export function* getSnapShotFromUserAuth(user, additionalData) {
  const userRef = yield call(createUserProfileDocument, user, additionalData);
    const snapShot = yield userRef.get();
    yield put(signInSuccess({id: snapShot.id, ...snapShot.data()}));
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

export function* signUp( {payload: {displayName, email, password}}) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user, {additionalData: displayName})
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  }
  catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmail
  )
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth); 

  }
  catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGN_IN_START,
    signInWithGoogle
  )
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all( [
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart)
  ])
}