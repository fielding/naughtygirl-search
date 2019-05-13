import styled from '@emotion/styled';

export const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  background: none;
  text-decoration: none;
  color: #e91e63;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const StyledCloseButton = styled(StyledButton)`
  font-size: 2em;
  position: absolute;
  top: 1.25em;
  right: 1.25em;
  display: block;
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.1s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: ${props => props.visible ? 'scale3d(1, 1, 1)' : 'scale3d(0.8, 0.8, 1)'};
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};

  @media screen and (max-width: 40em) {
    font-size: 1.15em;
  }

  @media (max-height: 10em) {
    right: 0em;
  }

  @media screen and (max-height: 37em) {
    font-size: 1.15em;
  }
`;

export const StyledSearchButton = styled(StyledButton)`
  font-size: 2.5em;
  position: absolute;
  right: 0;
  bottom: 0.15em;
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
  color: #e91e63;

  @media screen and (max-width: 40em) {
    font-size: ${props => (props.visible ? '1.25em' : '2.5em')};
    right: ${props => (props.visible ? '1em' : '.5em')};
  }
`;
