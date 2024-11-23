import * as basePrototypes from '@music163/antd/prototypes';
import type { IComponentPrototype, Dict } from '@music163/tango-helpers';

const sampleBlockCode = `
<Section>
  <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
</Section>
`;

const SnippetSuccessResult: IComponentPrototype = {
  name: 'SnippetSuccessResult',
  title: '성공 결과',
  icon: 'icon-tupian',
  type: 'snippet',
  package: '@music163/antd',
  initChildren: sampleBlockCode,
  relatedImports: ['Section', 'Result', 'Button'],
};

const Snippet2ColumnLayout: IComponentPrototype = {
  name: 'Snippet2ColumnLayout',
  title: '두 열 레이아웃',
  icon: 'icon-columns',
  type: 'snippet',
  package: '@music163/antd',
  initChildren: `
  <Columns columns={12}>
    <Column colSpan={6}></Column>
    <Column colSpan={6}></Column>
  </Columns>
  `,
  relatedImports: ['Columns', 'Column'],
};

const Snippet3ColumnLayout: IComponentPrototype = {
  name: 'Snippet3ColumnLayout',
  title: '세 열 레이아웃',
  icon: 'icon-column-3',
  type: 'snippet',
  package: '@music163/antd',
  initChildren: `
  <Columns columns={12}>
    <Column colSpan={4}>
    </Column>
    <Column colSpan={4}>
    </Column>
    <Column colSpan={4}>
  </Column>
  </Columns>
  `,
  relatedImports: ['Columns', 'Column'],
};

const SnippetButtonGroup: IComponentPrototype = {
  name: 'SnippetButtonGroup',
  title: '버튼 그룹',
  icon: 'icon-anniuzu',
  type: 'snippet',
  package: '@music163/antd',
  initChildren: `
  <Space>
    <Button type="primary">버튼1</Button>
    <Button>버튼2</Button>
  </Space>
  `,
  relatedImports: ['Space', 'Button'],
};

// hack some prototypes
basePrototypes['Section'].siblingNames = [
  'SnippetButtonGroup',
  'Snippet2ColumnLayout',
  'Snippet3ColumnLayout',
  'SnippetSuccessResult',
];

export const nativeDomPrototypes = () => {
  const doms = [
    'div',
    'span',
    'h1',
    'h2',
    'p',
    'a',
    'img',
    'ul',
    'ol',
    'li',
    'input',
    'button',
    'form',
    'table',
    'tr',
    'td',
    'header',
    'footer',
    'nav',
    'section',
    'article',
    'aside',
    'main',
    'video',
    'audio',
    'label',
    'select',
    'option',
    'textarea',
    'iframe',
  ];
  const componentPrototypes: Dict<IComponentPrototype> = doms.reduce(
    (acc: Dict<IComponentPrototype>, tag) => {
      acc[tag] = {
        name: tag,
        title: tag,
        hasChildren: true,
        package: '',
        type: 'element',
        props: [
          {
            name: 'style',
            title: '스타일',
            group: 'style',
            setter: 'expressionSetter',
            setterProps: {
              expressionType: 'cssObject',
            },
          },
          {
            name: 'className',
            title: '클래스 이름',
            setter: 'classNameSetter',
          },
          {
            name: 'id',
            title: 'ID',
            setter: 'textSetter',
          },
          {
            name: 'onClick',
            title: '클릭 이벤트',
            setter: 'actionSetter',
            group: 'event',
          },
        ],
      };
      return acc;
    },
    {},
  );
  return componentPrototypes;
};

// iconfont: https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2891794
const prototypes: Dict<IComponentPrototype> = {
  ...nativeDomPrototypes(),
  ...(basePrototypes as any),
  SnippetSuccessResult,
  Snippet2ColumnLayout,
  Snippet3ColumnLayout,
  SnippetButtonGroup,
  Section: {
    ...basePrototypes['Section'],
    props: [
      // ...(basePrototypes['Section'].props as any),
      {
        name: 'title',
        title: '제목',
        setter: 'textSetter',
      },
      {
        name: 'extra',
        title: '추가 내용',
        setter: 'renderSetter',
        options: [
          {
            label: '버튼 그룹',
            value: 'ButtonGroup',
            renderBody:
              '<ButtonGroup><Button>버튼1</Button><Button>버튼2</Button></ButtonGroup>',
            relatedImports: ['ButtonGroup', 'Button'],
          },
        ],
        template: '(v) => {\n  return {{content}};\n}',
      },
      {
        name: 'className',
        title: '클래스 이름',
        setter: 'classNameSetter',
        group: 'style',
      },
    ],
  },
  Box: {
    name: 'Box',
    title: '상자',
    icon: 'icon-mianban',
    type: 'container',
    package: '@music163/antd',
    hasChildren: true,
    siblingNames: ['Box'],
    props: [
      {
        name: 'aaa',
        title: 'aaa',
        setter: 'textSetter',
      },
      {
        name: 'bbb',
        title: 'bbb',
        setter: 'textSetter',
        deprecated: true,
      },
      {
        name: 'ccc',
        title: 'ccc',
        setter: 'textSetter',
        deprecated: true,
      },
      {
        name: 'd',
        title: 'd',
        setter: 'textSetter',
      },
      {
        name: 'onClick',
        title: '클릭 이벤트',
        setter: 'eventSetter',
        template: '(e) => {\n  {{content}}\n}',
        tip: '콜백 매개변수 설명: e는 이벤트 객체입니다',
      },
      {
        name: 'renderFoo',
        title: 'foo 사용자 정의 렌더링',
        setter: 'renderSetter',
        options: [
          {
            label: '자리 표시 공간',
            value: 'Box',
            render: '() => <Box>테스트</Box>',
            relatedImports: ['Box'],
          },
          {
            label: '자리 표시 텍스트',
            value: 'Text',
            render: '() => <Text>텍스트</Text>',
            relatedImports: ['Text'],
          },
        ],
      },
      {
        name: 'className',
        title: '클래스 이름',
        setter: 'classNameSetter',
        group: 'style',
      },
    ],
  },
  Columns: {
    name: 'Columns',
    type: 'container',
    icon: 'icon-column-4',
    package: '@music163/antd',
    hasChildren: true,
    childrenNames: ['Column'],
  },
  Column: {
    name: 'Column',
    type: 'container',
    icon: 'icon-juxing',
    package: '@music163/antd',
    hasChildren: true,
    siblingNames: ['Column'],
  },
  Text: {
    name: 'Text',
    type: 'element',
    icon: 'icon-wenzi',
    package: '@music163/antd',
    initChildren: '텍스트 내용',
  },
  Placeholder: {
    name: 'Placeholder',
    type: 'element',
    package: '@music163/antd',
  },
  ButtonGroup: {
    name: 'ButtonGroup',
    type: 'element',
    package: '@music163/antd',
    hasChildren: true,
    childrenNames: ['Button'],
  },
};

export default prototypes;
