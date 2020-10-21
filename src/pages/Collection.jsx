import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../components/CollectionItem';

import { selectCollection } from '../redux/shop/shop.selectors';

import {
  CollectionContainer,
  Title,
  Items
} from '../styles/pages/Collection';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item =>
          <CollectionItem key={item.id} item={item} />
        )}
      </Items>
    </CollectionContainer>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);