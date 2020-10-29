import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../redux/directory/directory.selectors';

import MenuItem from './MenuItem';

import { DirectoryMenu } from '../styles/components/Directory';

const Directory = ({ sections }) => (
  <DirectoryMenu>
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);