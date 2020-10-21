import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from './CollectionPreview';

import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';

import { CollectionsOverview } from '../styles/components/CollectionOverview';

const CollectionOverview = ({ collections }) => (
  <CollectionsOverview>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverview>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);