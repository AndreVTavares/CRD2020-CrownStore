import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/Collections-overview';
import CollectionPage from '../CollectionPage';
import Spinner from '../../components/Spinner';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

const ShopPage = ({ match, isCollectionFetching, fetchCollectionsStartAsync }) => {
  
  useEffect(() => {
    fetchCollectionsStartAsync()
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
