import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/filterSlice';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const eventFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" placeholder="Search..." value={filter} onChange={eventFilter} />
    </Label>
  );
};
