import React, { useState } from 'react';
import { useRefract, toRender } from 'refract-rxjs';
import { of } from 'rxjs';
import {
  catchError,
  map,
  filter,
  switchMap,
  debounceTime,
} from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { ajax } from 'rxjs/ajax';

const girls = require('../data/girls.json');

const searchGirlsJson = searchValue =>
  of(
    girls
      .filter(girl =>
        girl.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      .filter(girl =>
        girl.name.toLowerCase().startsWith(searchValue.toLowerCase())
      )
  );

// currently unused, but showing example of fetching data from api/remote
const searchGirls = searchValue =>
  ajax({
    url: 'https://gist.github.com/fielding/b8e5befa611a5f21bd645fb75b868a65/raw/8c9a79c6c5d2c51fe65e5e8ded847c4a5facebce/girls.json',
  }).pipe(
    map(results =>
      results.response.stars
        .map(star => star.star)
        .filter(star => star.toLowerCase().includes(searchValue.toLowerCase()))
        .filter(star =>
          star.toLowerCase().startsWith(searchValue.toLowerCase())
        )
    ),
    catchError(e => console.log(e) || of([]))
  );

export const SearchContext = React.createContext();

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  const searchResults = useRefract(
    ({ observe }) => {
      const search$ = observe('searchValue');

      const suggestions$ = search$.pipe(
        filter(val => val && val.length >= 2),
        debounceTime(100),
        switchMap(searchGirlsJson),
        map(toRender)
      );

      const clearSuggestions$ = search$.pipe(
        filter(val => val === ''),
        map(toRender)
      );

      return merge(suggestions$, clearSuggestions$);
    },
    { searchValue }
  );

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, searchResults }}
    >
      { children }
    </SearchContext.Provider>
  );
};

export default SearchProvider;
