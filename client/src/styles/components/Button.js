import styled, { css } from 'styled-components';

const Button = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const InvertedButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const GoogleSignIn = css`
  background-color: #4285f4;
  color: white;
  border: 1px solid #4285f4;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyle = props => {
  if (props.isGoogleSingIn) {
    return GoogleSignIn;
  }

  return props.inverted ? InvertedButton : Button
}

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyle}
`;
