import React from 'react';
import { connect } from 'react-redux';

// import CollectionItem from '../components/CollectionItem';

import { selectCollection } from '../redux/shop/shop.selectors';

import '../sass/pages/Collection.scss';

const Collection = ({ collection }) => (
  <div className="collection-page">
    <h2 className="title">
      {collection.title} PAGE
    </h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);