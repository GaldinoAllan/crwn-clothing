import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Collection from './Collection';
import CollectionsOverview from '../components/CollectionsOverview';
import WithSpinner from '../components/WithSpinner';

import { updateCollections } from '../redux/shop/shop.actions';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(Collection)

class Shop extends React.Component {
  state = { loading: true };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;

    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionsMap);
      this.setState({ loading: false });
    });

    // "onSnapshop()" substitutes the ".get().then()" to have the firestore live updates
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollection(collectionsMap);
    //   this.setState({ loading: false });
    // });
  };

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={loading}
              {...props}
            />
          )}
        />
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  updateCollection: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(
  null,
  mapDispatchToProps
)(Shop);