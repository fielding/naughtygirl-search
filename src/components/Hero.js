import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(${props => props.background}) no-repeat;
  background-size: cover;
  filter: blur(${props => (props.blur ? '13px' : '0')});
`;

const StyledVideo = styled.video`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Hero = ({ image, webm, video, blur }) => (
  <Container blur={blur} background={image}>
    <StyledVideo preload="metadata" poster={image} loop autoPlay muted>
      <source src={webm} type="video/webm" />
      <source src={video} type="video/mp4" />
    </StyledVideo>
  </Container>
);

export default Hero;
