import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const rotateLoader = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

const LoadingIconBase = styled.span`
  color: ${(props) => props.theme.colors.accent};
  animation: bounce 500ms alternate infinite ease;
`;

const LoadingIconFixed = styled(LoadingIconBase)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = () => {
  return (
    <LoadingIconFixed>
      <FontAwesomeIcon icon='dice-five' size='4x' />
    </LoadingIconFixed>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.main};
`;

export const LoadingOverlay = () => {
  return (
    <Overlay>
      <LoadingIconBase>
        <FontAwesomeIcon icon='dice-five' size='4x' />
      </LoadingIconBase>
    </Overlay>
  );
};

export default Loading;
