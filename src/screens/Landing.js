import React, { useContext } from 'react';
import styled from '@emotion/styled';


import Hero from '../components/Hero.js';
import { InterfaceContext } from '../context/InterfaceProvider.js';
import Logo from '../components/Logo.js';
import Search from '../components/Search';
import SearchProvider from '../context/SearchProvider.js';

import heroImage from '../images/hero.jpg';
import heroWebm from '../videos/hero.webm';
import heroVideo from '../videos/hero.mp4';


const Main = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
 `;

const Landing = props => {
  const { searchVisibility } = useContext(InterfaceContext);
  return (
    <Main>
      <Hero image={heroImage} webm={heroWebm} video={heroVideo} blur={searchVisibility}/>
      <Logo />
      <SearchProvider>
        <Search />
      </SearchProvider>
    </Main>
  )
}


export default Landing;

