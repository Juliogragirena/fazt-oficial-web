import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type UserImageProps = {
  url?: string;
  size?: 'xsm' | 'sm' | 'md' | 'rl' | 'lg';
  side?: 'left' | 'right';
};

const getSizes = (size: UserImageProps['size']) => {
  switch (size) {
    case 'xsm':
      return { width: '200px', fontSize: '0.875rem' };
    case 'sm':
      return { width: '200px', fontSize: '0.875rem' };
    case 'md':
      return { width: '400px', fontSize: '0.875rem' };
    case 'lg':
      return { width: '400px', fontSize: '0.875rem' };
    default:
      return { width: '200px', fontSize: '0.875rem' };
  }
};

const StyledUserImage = styled.div<UserImageProps>`
  border-radius: 8px;
  position: relative;
  margin: 1rem;
  outline: none;
  background-color: #f66c42;
  width: 100px;
  height: 100px;
`;

export default StyledUserImage;
