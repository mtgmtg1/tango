import React from 'react';
import cx from 'classnames';
import { css, Box, coral, Text } from 'coral-system';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { noop } from '@music163/tango-helpers';
import { Popconfirm } from 'antd';

const menuStyle = css`
  font-family: Consolas, Menlo, Courier, monospace;
  font-size: 14px;
`;

const MenuItem = coral(
  'div',
  css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    height: 28px;
    padding: 0 12px;
    cursor: pointer;

    button {
      display: none;
      background: transparent;
      border: 0;
      cursor: pointer;
    }

    .tango-menu-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 90%;
    }

    &:hover button {
      display: inline-block;
    }

    &:hover {
      background-color: var(--tango-colors-gray-10);
    }

    &.active {
      background-color: var(--tango-colors-primary-10);
    }
  `,
);

type MenuItemType = {
  /**
   * 식별자
   */
  key: string;
  /**
   * 텍스트
   */
  label: string;
  /**
   * 추가 텍스트
   */
  note?: string;
  /**
   * 편집 가능 여부
   */
  editable?: boolean;
  /**
   * 삭제 가능 여부
   */
  deletable?: boolean;
  /**
   * 삭제 시 확인 메시지
   */
  deletableConfirm?: string;
};

export interface MenuProps {
  items?: MenuItemType[];
  activeKey?: string;
  onItemClick?: (activeKey: string) => void;
  onEdit?: (activeKey: string) => void;
  onDelete?: (activeKey: string) => void;
}

export function Menu({
  items = [],
  activeKey,
  onItemClick = noop,
  onEdit = noop,
  onDelete = noop,
}: MenuProps) {
  return (
    <Box className="tango-menu" css={menuStyle}>
      {items.map((item) => (
        <MenuItem
          key={item.key}
          className={cx({ active: activeKey === item.key })}
          onClick={() => onItemClick(item.key)}
        >
          <div className="tango-menu-label">
            <Text color="text.body" title={item.label}>
              {item.label}
            </Text>
            <Text ml="m" color="text.placeholder">
              {item.note}
            </Text>
          </div>
          <div className="tango-menu-actions">
            {item.editable && (
              <button onClick={() => onEdit(item.key)}>
                <EditOutlined />
              </button>
            )}
            {item.deletable && (
              <Popconfirm
                title={item.deletableConfirm || '이 작업을 실행하시겠습니까?'}
                okText="확인"
                cancelText="취소"
                onConfirm={(e) => {
                  // 버블링을 방지하여 삭제 시 버그가 발생하는 것을 방지
                  e.stopPropagation();
                  onDelete(item.key);
                }}
              >
                <button>
                  <DeleteOutlined />
                </button>
              </Popconfirm>
            )}
          </div>
        </MenuItem>
      ))}
    </Box>
  );
}
