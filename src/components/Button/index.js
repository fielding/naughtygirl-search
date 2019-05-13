import React from 'react';

import { StyledCloseButton, StyledSearchButton } from './style.js';
import Icon from '../Icon.js';

export const CloseButton = props => (
  <StyledCloseButton {...props}>
    <Icon icon="cross" />
  </StyledCloseButton>
);

export const SearchButton = props => (
  <StyledSearchButton {...props}>
    <Icon icon="search" />
  </StyledSearchButton>
);
