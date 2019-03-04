import React from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import { connect } from 'react-redux';


const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >

            <Menu.Item key="1"><Link to='/'>HOME</Link></Menu.Item>

            {
                    this.props.isAuthenticated ?

                    <Menu.Item key="2" onClick={this.props.logout}>
                        Logout
                    </Menu.Item>

                    :

                    <Menu.Item key="2">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
              }
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to='/'>Posts</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to='/new/'><Button type="primary">Create A New Post</Button></Link></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
