import React from 'react';

import {
  SpinnerOverlay,
  SpinnerContainer
} from '../styles/components/WithSpinner';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
      );
  };

  return Spinner;
}
export default WithSpinner;