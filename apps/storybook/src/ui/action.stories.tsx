import React from 'react';
import { Action } from '@music163/tango-ui';
import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';

export default {
  title: 'UI/Action',
  component: Action,
};

export const Basic = {
  args: {
    icon: <PlusOutlined />,
    tooltip: '서비스 함수 추가',
  },
};

export const Link = {
  args: {
    icon: <QuestionCircleOutlined />,
    tooltip: '도움말 문서 보기',
    href: 'https://music.163.com',
  },
};

export const Outline = {
  args: {
    icon: <PlusOutlined />,
    tooltip: '서비스 함수 추가',
    shape: 'outline',
  },
};

export const Small = {
  args: {
    size: 'small',
    icon: <PlusOutlined />,
    tooltip: '서비스 함수 추가',
  },
};

export const Disabled = () => {
  return (
    <Space>
      <Action icon={<PlusOutlined />} tooltip="서비스 함수 추가" disabled />
      <Action icon={<PlusOutlined />} tooltip="서비스 함수 추가" disabled shape="outline" />
      <Action
        icon={<QuestionCircleOutlined />}
        tooltip="도움말 문서 보기"
        href="https://music.163.com"
        disabled
      />
    </Space>
  );
};

export const List = () => {
  return (
    <Space>
      <Action icon={<PlusOutlined />} tooltip="서비스 함수 추가" />
      <Action
        icon={<QuestionCircleOutlined />}
        tooltip="도움말 문서 보기"
        href="https://music.163.com"
      />
    </Space>
  );
};
