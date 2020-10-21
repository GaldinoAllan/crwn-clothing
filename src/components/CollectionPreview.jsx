import React from 'react';

import CollectionItem from './CollectionItem';

import {
  CollectionPreviewContainer,
  Title,
  PreviewContainer
} from '../styles/components/CollectionPreview';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <PreviewContainer>
      {
        items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;