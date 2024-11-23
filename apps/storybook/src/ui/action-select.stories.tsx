import React from 'react';
import { ActionSelect } from '@music163/tango-ui';

export default {
  title: 'UI/ActionSelect',
  component: ActionSelect,
};

const options = [
  { label: 'action1', value: 'action1' },
  { label: 'action2', value: 'action2' },
  { label: 'action3', value: 'action3' },
];

export const Basic = {
  args: {
    defaultText: '동작 선택',
    options,
    onSelect: console.log,
  },
};

export const showInput = {
  args: {
    text: '동작 선택',
    options,
    showInput: true,
  },
};
