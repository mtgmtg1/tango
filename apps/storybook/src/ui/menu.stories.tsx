import React from 'react';
import { Menu } from '@music163/tango-ui';

export default {
  title: 'UI/Menu',
};

export function Basic() {
  return (
    <Menu
      activeKey="2"
      items={[
        { key: '1', label: 'bob', note: '남성', deletable: true },
        { key: '2', label: 'alice', note: '여성', deletable: true },
        { key: '3', label: 'tom', deletable: true },
      ]}
    ></Menu>
  );
}
