import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from '../styles/components/FormInput';

const FormInput = ({ handleChange, label, ...otheProps }) => (
  <GroupContainer>
    <FormInputContainer
      onChange={handleChange}
      {...otheProps}
    />
    {
      label
        ?
        (<FormInputLabel>
          {label}
        </FormInputLabel>)
        : null
    }
  </GroupContainer>
);

export default FormInput;