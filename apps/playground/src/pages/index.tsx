import { Box } from 'coral-system';
import { Button, Form, Input, Modal, Space } from 'antd';
import {
  Designer,
  DesignerPanel,
  SettingPanel,
  Sidebar,
  Toolbar,
  WorkspacePanel,
  WorkspaceView,
  CodeEditor,
  Sandbox,
  DndQuery,
  themeLight,
} from '@music163/tango-designer';
import { createEngine, Workspace } from '@music163/tango-core';
import prototypes from '../helpers/prototypes';
import { Logo, ProjectDetail, bootHelperVariables, emptyPageCode, sampleFiles } from '../helpers';
import {
  ApiOutlined,
  AppstoreAddOutlined,
  BuildOutlined,
  FunctionOutlined,
  PlusOutlined,
  createFromIconfontCN,
} from '@ant-design/icons';
import { Action, PackageOutlined } from '@music163/tango-ui';
import { useState } from 'react';

const menuData = {
  common: [
    {
      title: '일반',
      items: [
        'Button',
        'Section',
        'Columns',
        'Column',
        'Box',
        'Text',
        'Space',
        'Typography',
        'Title',
        'Paragraph',
        'Table',
        'Each',
      ],
    },
    {
      title: '입력',
      items: ['Input', 'InputNumber', 'Select'],
    },
    {
      title: 'Formily 폼',
      items: ['FormilyForm', 'FormilyFormItem', 'FormilySubmit', 'FormilyReset'],
    },
    {
      title: '데이터 표시',
      items: ['Comment'],
    },
  ],
};

// 1. 워크스페이스 인스턴스화
const workspace = new Workspace({
  entry: '/src/index.js',
  files: sampleFiles,
  prototypes,
});

// 디버그를 위해 윈도우에 워크스페이스 주입
(window as any).__workspace__ = workspace;

// 2. 엔진 초기화
const engine = createEngine({
  workspace,
  menuData,
  defaultActiveView: 'design', // 코드 디자인 이중 모드
});

// @ts-ignore
window.__workspace__ = workspace;

// 3. 샌드박스 초기화
const sandboxQuery = new DndQuery({
  context: 'iframe',
});

// 4. 아이콘 라이브러리 초기화 (물자 패널과 컴포넌트 트리에 iconfont의 아이콘 사용)
createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_2891794_151xsllxqd7.js',
});

/**
 * 5. 플랫폼 초기화, https://local.netease.com:6006/에 접속
 */
export default function App() {
  const [showNewPageModal, setShowNewPageModal] = useState(false);
  const [form] = Form.useForm();
  return (
    <Designer
      theme={themeLight}
      engine={engine}
      config={{
        customActionVariables: bootHelperVariables,
        customExpressionVariables: bootHelperVariables,
      }}
      sandboxQuery={sandboxQuery}
    >
      <DesignerPanel
        logo={<Logo />}
        description={<ProjectDetail />}
        actions={
          <Box px="l">
            <Toolbar>
              <Toolbar.Item key="routeSwitch" placement="left" activeViews={['design']} />
              <Toolbar.Item key="addPage" placement="left" activeViews={['design']}>
                <Action
                  tooltip="페이지 추가"
                  shape="outline"
                  icon={<PlusOutlined />}
                  onClick={() => setShowNewPageModal(true)}
                />
              </Toolbar.Item>
              <Toolbar.Item key="history" placement="left" activeViews={['design']} />
              <Toolbar.Item key="preview" placement="left" activeViews={['design']} />
              <Toolbar.Item key="togglePanel" placement="right" activeViews={['design']} />
              <Toolbar.Item key="modeSwitch" placement="right" />
              <Toolbar.Separator />
              <Toolbar.Item placement="right">
                <Space>
                  <Button type="primary">발행</Button>
                </Space>
              </Toolbar.Item>
            </Toolbar>
            <Modal
              title="새 페이지 추가"
              open={showNewPageModal}
              onCancel={() => setShowNewPageModal(false)}
              footer={null}
            >
              <Form
                form={form}
                onFinish={(values) => {
                  workspace.addViewFile(values.name, emptyPageCode);
                  setShowNewPageModal(false);
                }}
                layout="vertical"
              >
                <Form.Item label="파일명" name="name" required rules={[{ required: true }]}>
                  <Input placeholder="파일명을 입력하세요" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    제출
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </Box>
        }
      >
        <Sidebar>
          <Sidebar.Item
            key="components"
            label="컴포넌트"
            icon={<AppstoreAddOutlined />}
            widgetProps={{
              menuData,
            }}
          />
          <Sidebar.Item key="outline" label="구조" icon={<BuildOutlined />} />
          <Sidebar.Item
            key="variables"
            label="변수"
            icon={<FunctionOutlined />}
            isFloat
            width={800}
          />
          <Sidebar.Item key="dataSource" label="인터페이스" icon={<ApiOutlined />} isFloat width={800} />
          <Sidebar.Item
            key="dependency"
            label="의존성"
            icon={<PackageOutlined />}
            isFloat
            width={800}
          />
        </Sidebar>
        <WorkspacePanel>
          <WorkspaceView mode="code">
            <CodeEditor />
          </WorkspaceView>
          <WorkspaceView mode="design">
            <Sandbox
              onMessage={(e) => {
                if (e.type === 'done') {
                  const sandboxWindow: any = sandboxQuery.window;
                  // if (sandboxWindow.TangoAntd) {
                  // if (sandboxWindow.TangoAntd.menuData) {
                  //   setMenuData(sandboxWindow.TangoAntd.menuData);
                  // }
                  // if (sandboxWindow.TangoAntd.prototypes) {
                  //   workspace.setComponentPrototypes(sandboxWindow.TangoAntd.prototypes);
                  // }
                  // }
                  if (sandboxWindow.localTangoComponentPrototypes) {
                    workspace.setComponentPrototypes(sandboxWindow.localTangoComponentPrototypes);
                  }
                }
              }}
              navigatorExtra={<Button size="small">안녕하세요</Button>}
            />
          </WorkspaceView>
        </WorkspacePanel>
        <SettingPanel />
      </DesignerPanel>
    </Designer>
  );
}
