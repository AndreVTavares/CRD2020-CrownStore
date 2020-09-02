import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/Collections-overview';
import CollectionPage from '../CollectionPage';

import { updateCollections } from '../../redux/shop/shop.actions';

import {
  firestore,
  convertCollectionsSnapshotToMaps,
} from '../../firebase/firebase';

const ShopPage = ({ match, updateCollections }) => {
  

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMaps(snapshot);
      updateCollections(collectionsMap)
    });
  }, [updateCollections]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
