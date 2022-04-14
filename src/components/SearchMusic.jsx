import React from 'react';
import {useEffect, useMemo, useState} from 'react';
import debounce from 'lodash.debounce';
import {useDispatch} from 'react-redux';
import {getBands} from '../library/thunks';
import Card from '../components/shared/Cards'

const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    dispatch(getBands(e.target.value));
  };
  const debouncedResults = useMemo(() => debounce(handleChange, 500), []);

  useEffect(() => debouncedResults.cancel());

  return (
    <Card>
    <div className='input-group'>
    <input
      className="search"
      placeholder="Search Band"
      onChange={debouncedResults}
    />
    </div>
    </Card>
  );
};

export default Search;
