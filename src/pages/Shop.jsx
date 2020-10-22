import React from 'react';
import { Route } from 'react-router-dom';

import Collection from './Collection';
import CollectionsOverview from '../components/CollectionsOverview';

import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot);
    });
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div >
    );
  };
};

export default Shop;