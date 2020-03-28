import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from './logo.png';
import '../../less/frame.css'
import { adminRoutes } from '../../routes/index';

import {withRouter} from 'react-router-dom';

// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const routes = adminRoutes.filter(route => route.isShow);

function Index(props) {
    return (
            <Layout>
    <Header>
      <div className="logo">
          <img src={logo} width='100%' alt='logo' />
      </div>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            {routes.map(route => {
                return (<Menu.Item key={route.path} onClick={p=>props.history.push(p.key)}>{route.icon}{route.title}</Menu.Item>)
            })}
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default withRouter(Index);
