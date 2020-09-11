import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMaps,
} from '../../firebase/firebase';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';
import ShopActionsTypes from './shop.types';

export function* fetchCollectionsAsync() {
 
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMaps,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));

  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
