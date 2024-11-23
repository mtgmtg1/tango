import React from 'react';
import { FormModel, SettingForm, register } from '@music163/tango-setting-form';
import { IComponentPrototype } from '@music163/tango-helpers';
import { BUILT_IN_SETTERS } from '@music163/tango-designer/src/setters';
import { Box } from 'coral-system';
import { JsonView } from '@music163/tango-ui';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Card } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

const BLACK_LIST = ['codeSetter', 'eventSetter', 'modelSetter', 'routerSetter'];

BUILT_IN_SETTERS.filter((setter) => !BLACK_LIST.includes(setter.name)).forEach(register);

createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_2891794_151xsllxqd7.js',
});

export default {
  title: 'SettingForm',
};

/**
 * 폼 값 미리보기
 */
const FormValuePreview = observer(({ model }: { model: FormModel }) => {
  const data = toJS(model.values);
  return <JsonView src={data} />;
});

interface SettingFormDemoProps {
  initValues?: object;
  prototype?: IComponentPrototype;
}

function SettingFormDemo({ initValues, prototype }: SettingFormDemoProps) {
  const model = new FormModel(initValues, { onChange: console.log });
  return (
    <Box display="flex">
      <Box flex="0 0 320px" overflow="hidden">
        <SettingForm
          model={model}
          prototype={prototype}
          showIdentifier={{
            identifierKey: 'tid',
            getIdentifier: () => `time${Date.now()}`,
          }}
        />
      </Box>
      <Box position="relative">
        <Card title="폼 상태 미리보기" style={{ position: 'sticky', top: 0 }}>
          <FormValuePreview model={model} />
        </Card>
      </Box>
    </Box>
  );
}

const prototypeHasBasicProps: IComponentPrototype = {
  name: 'Sample',
  title: '데모 컴포넌트',
  package: 'sample-pkg',
  type: 'element',
  docs: 'https://4x-ant-design.antgroup.com/components/slider-cn',
  props: [
    {
      name: 'code',
      title: 'codeSetter',
      setter: 'codeSetter',
    },
    {
      name: 'style',
      title: 'codeSetter(cssObject)',
      setter: 'codeSetter',
      setterProps: {
        expressionType: 'cssObject',
      },
    },
    {
      name: 'text',
      title: 'textSetter',
      setter: 'textSetter',
    },
    {
      name: 'text2',
      title: 'textAreaSetter',
      setter: 'textAreaSetter',
    },
    {
      name: 'src',
      title: 'imageSetter',
      setter: 'imageSetter',
    },
    {
      name: 'number',
      title: 'numberSetter',
      setter: 'numberSetter',
    },
    {
      name: 'number2',
      title: 'sliderSetter',
      setter: 'sliderSetter',
    },
    {
      name: 'bool',
      title: 'boolSetter',
      setter: 'boolSetter',
    },
    {
      name: 'enum',
      title: 'enumSetter',
      setter: 'enumSetter',
    },
    {
      name: 'list',
      title: 'listSetter',
      setter: 'listSetter',
    },
  ],
};

export function Basic() {
  return (
    <SettingFormDemo
      initValues={{
        bool: true,
        enum: {
          aaa: 'aaa',
          bbb: 'bbb',
          ccc: 'ccc',
        },
        list: [{ key: 1 }, { key: 2 }],
      }}
      prototype={prototypeHasBasicProps}
    />
  );
}

export function DeprecatedProp() {
  return (
    <SettingFormDemo
      prototype={{
        name: 'Deprecated',
        package: 'sample-pkg',
        type: 'element',
        props: [
          {
            name: 'number',
            title: 'numberSetter',
            setter: 'numberSetter',
            tip: '이것은 텍스트 속성입니다',
            docs: 'https://4x-ant-design.antgroup.com/components/slider-cn',
            deprecated: 'text2로 대체',
          },
          {
            name: 'number1',
            title: 'sliderSetter',
            setter: 'sliderSetter',
          },
        ],
      }}
    />
  );
}

export function Validate() {
  return (
    <SettingFormDemo
      prototype={{
        name: 'Validate',
        package: 'sample-pkg',
        type: 'element',
        props: [
          {
            name: 'number',
            title: 'numberSetter',
            setter: 'numberSetter',
            validate: (value) => {
              if (!value && value !== 0) {
                return '필수';
              }
              if (value < 0) {
                return '0보다 커야 합니다';
              }
              if (value > 10) {
                return '10 이하이어야 합니다';
              }
            },
          },
        ],
      }}
    />
  );
}

export function ObjectSetter() {
  return (
    <SettingFormDemo
      prototype={{
        name: 'Object',
        package: 'sample-pkg',
        type: 'element',
        props: [
          {
            name: 'text',
            title: 'textSetter',
            setter: 'textSetter',
          },
          {
            name: 'object',
            title: 'objectSetter',
            setter: 'objectSetter',
            props: [
              {
                name: 'text',
                title: 'textSetter',
                setter: 'textSetter',
              },
              {
                name: 'number',
                title: 'numberSetter',
                setter: 'numberSetter',
              },
            ],
          },
        ],
      }}
    />
  );
}

export function InitValues() {
  return (
    <SettingFormDemo
      initValues={{
        bool: true,
        bool1: '{{true}}',
        style: {
          background: 'red',
        },
        object: {
          text: 'text',
          number: 10,
        },
        object1: {
          text: 'text',
          number: '{{tango.stores.user?.age}}',
        },
        // 유일한 경우는 사용자가 코드에서 rest 연산자를 사용하는 경우이며, 이 경우 추가 처리가 필요하지 않으며, 사용자에게 코드 모드를 사용하도록 안내합니다
        object2: '{{{ text: "text22", number: 22, ...{ extra: "some" } }}}',
        list: [{ key: 'aaa' }, { key: 'bbb' }], // 리스트 객체
        list1: "{{[{ key: 'aaa' }, { key: 'bbb' }]}}", // 원시 코드
      }}
      prototype={{
        name: 'InitValues',
        package: 'sample-pkg',
        type: 'element',
        props: [
          {
            name: 'bool',
            title: '값 초기화',
            setter: 'boolSetter',
          },
          {
            name: 'bool1',
            title: '값 초기화',
            setter: 'boolSetter',
          },
          {
            name: 'bool2',
            title: '초기값 없음',
            setter: 'boolSetter',
          },
          {
            name: 'style',
            title: 'codeSetter',
            setter: 'codeSetter',
            setterProps: {
              expressionType: 'cssObject',
            },
          },
          {
            name: 'object',
            props: [
              {
                name: 'text',
                title: 'text',
                setter: 'textSetter',
              },
              {
                name: 'number',
                title: 'number',
                setter: 'numberSetter',
              },
            ],
          },
          {
            name: 'object1',
            props: [
              {
                name: 'text',
                title: 'text',
                setter: 'textSetter',
              },
              {
                name: 'number',
                title: 'number',
                setter: 'numberSetter',
              },
            ],
          },
          {
            name: 'object2',
            props: [
              {
                name: 'text',
                title: 'text',
                setter: 'textSetter',
              },
              {
                name: 'number',
                title: 'number',
                setter: 'numberSetter',
              },
            ],
          },
          {
            name: 'list',
            title: 'listSetter',
            setter: 'listSetter',
          },
          {
            name: 'list1',
            title: 'listSetter',
            setter: 'listSetter',
          },
        ],
      }}
    />
  );
}

export function Lite() {
  return (
    <Box width={320} border="solid" borderColor="line2">
      <SettingForm
        showSearch={false}
        showGroups={false}
        showItemSubtitle={false}
        prototype={prototypeHasBasicProps}
        disableSwitchExpressionSetter
      />
    </Box>
  );
}

export function HideToggleCode() {
  const model = new FormModel({});
  return (
    <Box width={320} border="solid" borderColor="line2">
      <SettingForm model={model} prototype={prototypeHasBasicProps} disableSwitchExpressionSetter />
    </Box>
  );
}

const prototypeHasExtraProps: IComponentPrototype = {
  name: 'ExtraProps',
  type: 'element',
  package: '@music163/antd',
  props: [
    {
      name: 'choice',
      title: 'choiceSetter',
      setter: 'choiceSetter',
      options: [
        { label: '옵션1', value: '1' },
        { label: '옵션2', value: '2' },
        { label: '옵션3', value: '3' },
      ],
    },
    {
      name: 'picker',
      title: 'pickerSetter',
      setter: 'pickerSetter',
      options: [
        { label: '옵션1', value: '1' },
        { label: '옵션2', value: '2' },
        { label: '옵션3', value: '3' },
      ],
    },
    {
      name: 'actionList',
      title: 'actionListSetter',
      setter: 'actionListSetter',
    },
    {
      name: 'list',
      title: 'listSetter',
      setter: 'listSetter',
    },
    {
      name: 'options',
      title: 'optionSetter',
      setter: 'optionSetter',
    },
    {
      name: 'columns',
      title: 'tableColumnsSetter',
      setter: 'tableColumnsSetter',
    },
    {
      name: 'css',
      title: 'cssSetter',
      setter: 'cssSetter',
    },
    {
      name: 'date',
      title: 'dateSetter',
      setter: 'dateSetter',
    },
    {
      name: 'dateRange',
      title: 'dateRangeSetter',
      setter: 'dateRangeSetter',
    },
    {
      name: 'time',
      title: 'timeSetter',
      setter: 'timeSetter',
    },
    {
      name: 'time',
      title: 'timeRangeSetter',
      setter: 'timeRangeSetter',
    },
    {
      name: 'enum',
      title: 'enumSetter',
      setter: 'enumSetter',
    },
    {
      name: 'event',
      title: 'eventSetter',
      setter: 'eventSetter',
    },
    {
      name: 'json',
      title: 'jsonSetter',
      setter: 'jsonSetter',
    },
    {
      name: 'jsx',
      title: 'jsxSetter',
      setter: 'jsxSetter',
    },
    {
      name: 'render',
      title: 'renderPropsSetter',
      setter: 'renderPropsSetter',
    },
    {
      name: 'cell',
      title: 'tableCellSetter',
      setter: 'tableCellSetter',
    },
    {
      name: 'expandable',
      title: 'tableExpandableSetter',
      setter: 'tableExpandableSetter',
    },
    {
      name: 'router',
      title: 'routerSetter',
      setter: 'routerSetter',
    },
  ],
};

export function ExtraSetters() {
  return (
    <SettingFormDemo
      initValues={{
        router: 'www.163.com',
        expression: `{ foo: 'foo' }`,
        object: {
          name: 'Alice',
        },
        image:
          'https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/13270238619/2cc5/0782/1d6e/009b96bf90c557b9bbde09b1687a2c80.png',
      }}
      prototype={prototypeHasExtraProps}
    />
  );
}

export function StyleProps() {
  return (
    <SettingFormDemo
      prototype={{
        name: 'Box',
        title: 'Box',
        type: 'element',
        package: '@music163/antd',
        props: [
          {
            name: 'style',
            title: 'styleSetter',
            setter: 'styleSetter',
          },
          {
            name: 'display',
            title: 'displaySetter',
            setter: 'displaySetter',
          },
          {
            name: 'flexDirection',
            title: 'flexDirectionSetter',
            setter: 'flexDirectionSetter',
          },
          {
            name: 'flexGap',
            title: 'flexGapSetter',
            setter: 'flexGapSetter',
          },
          {
            name: 'flexJustifyContent',
            title: 'flexJustifyContentSetter',
            setter: 'flexJustifyContentSetter',
          },
          {
            name: 'flexAlignItems',
            title: 'flexAlignItemsSetter',
            setter: 'flexAlignItemsSetter',
          },
          {
            name: 'spacing',
            title: 'spacingSetter',
            setter: 'spacingSetter',
          },
          {
            name: 'color',
            title: 'colorSetter',
            setter: 'colorSetter',
          },
          {
            name: 'bg',
            title: 'bgSetter',
            setter: 'bgSetter',
          },
          {
            name: 'border',
            title: 'borderSetter',
            setter: 'borderSetter',
          },
        ],
      }}
    />
  );
}
