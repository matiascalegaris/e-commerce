import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { ShopActionTypes } from "./shop.types"

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());
    collectionRef.get().then( snapshot => {
      const collections = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collections));
      }
    ).catch( error => dispatch(fetchCollectionFail(error.message)));
  }
}

export const fetchCollectionSuccess = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
})

export const fetchCollectionFail = message => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: message
})