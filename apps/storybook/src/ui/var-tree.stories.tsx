import React from 'react';
import { VariableTree } from '@music163/tango-designer/src/components';
import { Box } from 'coral-system';

export default {
  title: 'Designer/VariableTree',
};

const data = [
  {
    title: '스토어',
    key: 'stores',
    selectable: false,
    children: [
      {
        title: 'user',
        key: 'stores.user',
        children: [
          {
            title: 'name',
            key: 'stores.user.name',
            raw: '"Tom"',
          },
          {
            title: 'age',
            key: 'stores.user.age',
            raw: '18',
          },
        ],
      },
      {
        title: 'book',
        key: 'stores.book',
        children: [
          {
            title: 'name',
            key: 'stores.book.name',
            raw: '"JavaScript 고급 프로그래밍"',
          },
          {
            title: 'price',
            key: 'stores.book.price',
            raw: '99.99',
          },
        ],
      },
    ],
  },
  {
    title: '서비스',
    key: 'services',
    selectable: false,
    children: [
      {
        title: 'add',
        key: 'services.add',
      },
      {
        title: 'multiply',
        key: 'services.multiply',
      },
    ],
  },
];

export function Basic() {
  return (
    <Box width={600} border="solid">
      <VariableTree dataSource={data} />
    </Box>
  );
}
