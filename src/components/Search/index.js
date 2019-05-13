import React, { useContext } from 'react';
import { InterfaceContext } from '../../context/InterfaceProvider.js';
import { SearchContext } from '../../context/SearchProvider.js';
import { CloseButton, SearchButton } from '../Button';
import {
  Column,
  Container,
  Country,
  Header,
  Headshot,
  Info,
  Name,
  Paragraph,
  Result,
  ResultInfo,
  ResultItem,
  Results,
  SearchForm,
  SearchInput,
  SearchPrediction,
} from './style.js';

import headshot from '../../data/headshots/5.jpg';

export default () => {
  const {
    showSearch,
    hideSearch,
    searchVisibility,
  } = useContext(InterfaceContext);

  const {
    searchValue,
    setSearchValue,
    searchResults,
  } = useContext(SearchContext);

  return (
    <Container visible={searchVisibility}>
      <CloseButton
        visible={searchVisibility}
        onClick={hideSearch}
        aria-label="Close search form"
      />
      <SearchForm visible={searchVisibility} action="">
        <SearchInput
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
          onFocus={showSearch}
          name="search"
          type="search"
          autoComplete="off"
          spellCheck="false"
        />
        <SearchPrediction
          value={
            searchResults && searchValue.length > 0 && searchResults.length > 0
              ? searchResults[0].name
              : ''
          }
          disabled
        />
        <SearchButton visible={searchVisibility} aria-label="Search" />
      </SearchForm>

      {searchValue.length > 0 && searchResults.length > 0 ? (
        <Info>
          <Column>
            <Header visible={searchVisibility}>Top Result</Header>
            <Result visible={searchVisibility}>
              <Headshot src={headshot} />
              <ResultInfo>
                <Name visible={searchVisibility}>
                  {searchResults
                    && searchResults.length > 0
                    && searchResults[0].name}
                </Name>
                <Country visible={searchVisibility}>
                  {searchResults
                  && searchResults.length > 0
                  && searchResults[0].country}
                </Country>
              </ResultInfo>
            </Result>
          </Column>
          <Column>
            <Header visible={searchVisibility}>Related</Header>
            <Results visible={searchVisibility}>
              {searchResults 
                && searchResults.slice(0, 10).map(result => (
                  <ResultItem visible={searchVisibility} key={result.id}>
                    {result.name}
                  </ResultItem>
                ))}
            </Results>
          </Column>
        </Info>
      ) : (
        <Info>
          <Column>
            <Header visible={searchVisibility}>May We Suggest?</Header>
            <Paragraph visible={searchVisibility}>
              <i>@</i>Riley Reid <i>@</i>Georgia Jones <i>@</i>Tori Black{' '}
              <i>@</i>Little Caprice <i>@</i>Mia Khalifa <i>@</i>Mia Malkova{' '}
              <i>@</i>Valentina Nappi <i>@</i>Bree Olson <i>@</i>Alina Lopez{' '}
              <i>@</i>Remy Lacroix <i>@</i>Gina Valentina <i>#</i>huzzah
            </Paragraph>
          </Column>
        </Info>
      )}
    </Container>
  );
};
