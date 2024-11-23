import React from 'react';
import { DragPanel } from '@music163/tango-ui';
import { Box, Text } from 'coral-system';
import { Button } from 'antd';

export default {
  title: 'UI/DragPanel',
};

export function Basic() {
  return (
    <>
      <DragPanel
        title="패널 제목"
        extra="오른쪽 상단 내용"
        width={350}
        body={<Box p="m">내용</Box>}
        footer={<Text>하단 정보</Text>}
      >
        <Button>클릭하여 패널 열기</Button>
      </DragPanel>
      <DragPanel
        title="패널 제목"
        extra="오른쪽 상단 내용"
        width={350}
        body={<Box p="m">내용</Box>}
        footer={<Text>하단 정보</Text>}
      >
        <Button
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
          }}
        >
          하단 패널 자동 조정
        </Button>
      </DragPanel>
    </>
  );
}

export function FooterCustom() {
  return (
    <DragPanel
      title="패널 제목"
      extra="오른쪽 상단 내용"
      width={350}
      body={<Box p="m">내용</Box>}
      footer={(close) => (
        <Box display="flex" justifyContent="space-between">
          <Text>하단 정보</Text>
          <Button size="small" onClick={() => close()}>
            클릭하여 닫기
          </Button>
        </Box>
      )}
    >
      <Button>클릭하여 패널 열기</Button>
    </DragPanel>
  );
}

export function ResizeablePanel() {
  return (
    <DragPanel
      title="패널 제목"
      resizeable
      extra="오른쪽 상단 내용"
      width={350}
      height={400}
      body={
        <Box p="m" textAlign="center" background="#fa8484">
          내용
        </Box>
      }
      footer={<Text>하단 정보</Text>}
    >
      <Button>클릭하여 패널 열기</Button>
    </DragPanel>
  );
}
