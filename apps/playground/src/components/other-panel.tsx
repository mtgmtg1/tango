import React from 'react';
import { Row, Switch } from 'antd';
import { observer } from '@music163/tango-context';

const OtherPanel = observer(({ autoRemove, setAutoRemove }: any) => {
  const onChange = (checked: boolean) => {
    setAutoRemove(checked);
  };
  return (
    <Row>
      <label>자동으로 참조되지 않은 변수를 제거:</label>
      <Switch
        checkedChildren="켜기"
        unCheckedChildren="끄기"
        onChange={onChange}
        checked={autoRemove}
      />
    </Row>
  );
});

export default OtherPanel;
