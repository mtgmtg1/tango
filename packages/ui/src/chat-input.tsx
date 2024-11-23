import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { Box, Text, css } from 'coral-system';
import { CloseOutlined, RobotOutlined } from '@ant-design/icons';

const chatBoxStyle = css`
  position: relative;
  .ant-btn {
    position: absolute;
    bottom: 6px;
    right: 6px;
  }
  textarea {
    border: 0;
  }
`;

export interface ChatInputProps {
  title?: string;
  showCloseIcon?: boolean;
  placeholder?: string;
  onGenerate?: (text: string) => Promise<any>;
  onApply?: (content: string) => void;
  onClose?: () => void;
}

export function ChatInput({
  title = 'AI 프로그래밍 어시스턴트',
  showCloseIcon = true,
  placeholder = '실행하려는 작업을 간단히 설명해주세요',
  onGenerate,
  onApply,
  onClose,
}: ChatInputProps) {
  const [text, setText] = useState('');
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <Box border="solid" borderColor="line2" borderRadius="m" position="relative">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="fill2"
        px="m"
        py="s"
        borderBottom="solid"
        borderBottomColor="line2"
      >
        <Box fontSize="14px">
          <RobotOutlined />
          <Text ml="m" userSelect="none">
            {title}
          </Text>
        </Box>
        {showCloseIcon && <CloseOutlined onClick={onClose} />}
      </Box>
      <Box css={chatBoxStyle}>
        <Input.TextArea
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
        />
        <Button
          disabled={!text}
          size="small"
          loading={loading}
          onClick={async () => {
            setLoading(true);
            const ret = await onGenerate(text);
            setLoading(false);
            ret && setPreview(ret);
          }}
        >
          생성
        </Button>
      </Box>
      <Box minHeight={48} background="fill2" p="m" fontSize="12px" css={chatBoxStyle}>
        <Text as="code">결과：{preview || '없음'}</Text>
        <Button size="small" disabled={!preview} onClick={() => onApply(preview)}>
          적용
        </Button>
      </Box>
    </Box>
  );
}
