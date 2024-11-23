import React, { useState } from 'react';
import { Box } from 'coral-system';
import { Button, Space } from 'antd';
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
import { Logo, ProjectDetail, bootHelperVariables } from '@/helpers';
import {
  AppstoreAddOutlined,
  BuildOutlined,
  ClusterOutlined,
  createFromIconfontCN,
} from '@ant-design/icons';
import { mailFiles } from '@/helpers/mail-files';

// 1. 작업 공간 인스턴스화
const workspace = new Workspace({
  entry: '/src/index.js',
  files: mailFiles,
});

// 2. 엔진 초기화
const engine = createEngine({
  workspace,
});

// @ts-ignore
window.__mailWorkspace__ = workspace;

// 3. 샌드박스 초기화
const sandboxQuery = new DndQuery({
  context: 'iframe',
});

// 4. 아이콘 라이브러리 초기화 (아이콘 폰트의 아이콘을 사용하여 물질 패널 및 구성 요소 트리 사용)
createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_2891794_151xsllxqd7.js',
});

/**
 * 5. 플랫폼 초기화, https://local.netease.com:6006/에 접속
 */
export default function App() {
  const [menuLoading, setMenuLoading] = useState(true);
  const [menuData, setMenuData] = useState(false);
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
              <Toolbar.Item key="history" placement="left" />
              <Toolbar.Item key="preview" placement="left" />
              <Toolbar.Item key="modeSwitch" placement="right" />
              <Toolbar.Item key="togglePanel" placement="right" />
              <Toolbar.Separator />
              <Toolbar.Item placement="right">
                <Space>
                  <Button type="primary">배포</Button>
                </Space>
              </Toolbar.Item>
            </Toolbar>
          </Box>
        }
      >
        <Sidebar>
          <Sidebar.Item
            key="components"
            label="구성 요소"
            icon={<AppstoreAddOutlined />}
            widgetProps={{
              menuData: menuData as any,
              loading: menuLoading,
            }}
          />
          <Sidebar.Item key="outline" label="구조" icon={<BuildOutlined />} />
          <Sidebar.Item
            key="dependency"
            label="종속성"
            icon={<ClusterOutlined />}
            isFloat
            width={800}
          />
        </Sidebar>
        <WorkspacePanel>
          <WorkspaceView mode="design">
            <Sandbox
              onMessage={(e) => {
                if (e.type === 'done') {
                  const sandboxWindow: any = sandboxQuery.window;
                  if (sandboxWindow.TangoMail) {
                    if (sandboxWindow.TangoMail.menuData) {
                      setMenuData(sandboxWindow.TangoMail.menuData);
                      engine.designer.setMenuData(sandboxWindow.TangoMail.menuData);
                    }
                    if (sandboxWindow.TangoMail.prototypes) {
                      workspace.setComponentPrototypes(sandboxWindow.TangoMail.prototypes);
                    }
                  }
                  setMenuLoading(false);
                }
              }}
              navigatorExtra={<Button size="small">hello world</Button>}
            />
          </WorkspaceView>
          <WorkspaceView mode="code">
            <CodeEditor />
          </WorkspaceView>
        </WorkspacePanel>
        <SettingPanel />
      </DesignerPanel>
    </Designer>
  );
}
