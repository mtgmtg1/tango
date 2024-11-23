import React from 'react';
import { TagSelect } from '@music163/tango-ui';

export default {
  title: 'UI/TagSelect',
};

export function Basic() {
  return (
    <TagSelect
      options={['영화', '책', '음악', '스포츠'].map((item) => ({ label: item, value: item }))}
      onChange={console.log}
    />
  );
}

export function SingleMode() {
  return (
    <TagSelect
      options={['영화', '책', '음악', '스포츠'].map((item) => ({ label: item, value: item }))}
      mode="single"
      onChange={console.log}
    />
  );
}
