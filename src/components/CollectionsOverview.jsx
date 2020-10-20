import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from './CollectionPreview';

import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';

import '../sass/components/CollectionsOverview.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collctions-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);