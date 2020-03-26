import React, {
  Component
} from 'react'
import './App.css';

import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  render() {
    return ( 
      <Layout>
        <Sider
           trigger={null} collapsible
           collapsed={this.state.collapsed}
           style={{height : '100vh',position : 'fixed'}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background"
                  style={{ padding: 0,
                           position : 'fixed',
                           left : this.state.collapsed ?'80px':'200px',
                           width : '100%',
                           transition : 'left 0.2s' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              paddingLeft :this.state.collapsed ? '80px':'200px',
              marginTop : '64px',
              transition : 'padding-left 0.2s'
            }}
          >
            Content<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </Content>
        </Layout>
      </Layout>
    )
  }
}