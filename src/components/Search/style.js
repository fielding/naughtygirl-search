import styled from '@emotion/styled';
import { css } from '@emotion/core';

const transition = props => css`
  opacity: ${props.visible ? 1 : 0};
  transform: ${props.visible
    ? 'translate3d(0, 0, 0)'
    : 'translate3d(0, 100px, 0)'};
  transition: ${props.visible
    ? 'opacity 0.5s, transform 0.5s'
    : 'opacity 0.2s, transform 0.5s'};
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
`;

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media (max-height: 28em),
    (min-width: 25em) and (max-height: 35em),
    (min-width: 35em) and (max-height: 39em),
    (min-width: 67em) and (max-height: 45em) {
    z-index: 3;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: #101010;
    transition: opacity 0.5s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    opacity: ${props => (props.visible ? 0.8 : 0.4)};
  }
`;

export const SearchForm = styled.form`
  position: relative;
  width: 66%;
  max-width: 1000px;
  min-width: 640px;
  margin: 0 auto;
  transform: ${props =>
    props.visible
      ? 'translate3d(0,40vh,0) translate3d(0,-50%,0)'
      : 'scale3d(0.5,0.5,1)'};
  transition: transform 0.5s, -webkit-transform 0.5s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);

  @media screen and (max-width: 40em) {
    width: 100%;
    min-width: 300px;
    padding: 2em 1em 0;
  }
`;

export const SearchInput = styled.input`
  border: 0;
  background: transparent;
  border-radius: 0;
  -webkit-appearance: none;
  font-family: inherit;
  font-size: 3em;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 0 1em 0.15em 0;
  pointer-events: auto;
  color: #fff;
  border-bottom: 4px solid;
  text-transform: capitalize;

  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  &::-ms-clear {
    display: none;
  }

  @media screen and (max-width: 40em) {
    font-size: 2em;
  }
  @media screen and (max-height: 37em) {
    font-size: 2em;
    padding-top: 1em;
  }
  @media screen and (max-height: 37em) {
    @media (max-width: 40em) {
      padding-top: 0;
    }
  }
`;

export const SearchPrediction = styled(SearchInput)`
  position: absolute;
  z-index: -1;
  left: 0;
  color: rgb(127, 127, 127);
  border: 0;

  @media screen and (max-width: 40em) {
    margin-left: 0.5em;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 66%;
  min-width: 640px;
  max-width: 1000px;
  text-align: left;
  margin: auto;
  margin-top: calc(40vh + 2em);
  justify-content: center;

  @media screen and (max-width: 55em) {
    flex-direction: column;
    width: 100%;
    min-width: 300px;
  }
`;

export const Column = styled.div`
  width: 450px;
  flex-shrink: 0;
  text-align: left;
  margin: 0 auto 0;
  pointer-events: none;

  @media screen and (max-width: 5em) {
    font-size: 0.85em;
    margin-top: 1em;
    padding: 0 1em;

    @media (max-height: 45em) {
      :nth-of-type(2) {
        display: none;
        visibility: hidden;
      }
    }
  }

  @media screen and (max-height: 29em) {
    display: none;
    visibility: hidden;
  }
`;

export const Header = styled.h2`
  font-size: 1.5em;
  margin: 0;
  ${transition}

  ::before {
    content: '⇾';
    display: inline-block;
    padding: 0 0.5em 0 0;
    color: #e91e63;
  }
`;

export const Name = styled.h3`
  font-size: 1.5em;
  padding: 0;
  margin: 0;
  ${transition}
`;

export const Country = styled.h3`
  font-size: 1em;
  padding: 0;
  margin: 0;
  ${transition}
`;

export const Paragraph = styled.p`
  font-size: 1.3em;
  line-height: 1.4;
  margin: 0.75em 0 0 0;
  color: #ffffff;

  ${transition}

  i {
    color: #e91e63;
  }
`;

export const Result = styled.div`
  display: flex;
  margin-top: 1em;
  margin-bottom: 1em;
  padding-left: 2.5em;
  ${transition}
`;

export const ResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

export const Results = styled.ul`
  list-style: none;
  -webkit-margin-before: 0.75em;
  -webkit-margin-after: 0.75em;
  -webkit-padding-start: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${transition}

  @media screen and (max-width: 55em) {
    @media screen and (max-height: 24em) {
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
    }
  }

  @media screen and (min-width: 55em) {
    @media screen and (max-height: 31.25em) {
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
    }
  }
`;

export const ResultItem = styled.li`
  font-size: 1.3em;
  line-height: 1.4;
  ${transition}

  ::before {
    content: '@';
    color: #e91e63;
    margin: 0;
    margin-right: 0.05em;
  }

  @media screen and (max-width: 55em) {
    @media screen and (max-height: 24em) {
      width: calc(50% - 1em);
    }
  }

  @media screen and (min-width: 55em) {
    @media screen and (max-height: 31.25em) {
      width: calc(50% - 1em);
    }
  }
`;

export const Headshot = styled.img`
  border-radius: 20%;
  width: 30%;
  height: 30%;
  filter: grayscale(25%);

  @media screen and (max-width: 55em) {
    width: 25%;
  }
`;
