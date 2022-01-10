import { call, put, takeLatest } from 'redux-saga/effects';
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFail  } from './shop.actions';
import { ShopActionTypes } from './shop.types';

export function* fetchCollectionStartAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collections = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collections));
  } catch(error) {
    yield put(fetchCollectionFail(error));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START, 
    fetchCollectionStartAsync)
}