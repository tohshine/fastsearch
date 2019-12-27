import React from 'react';
import { Layout, Icon, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../action/authAction';

const topHeader = ({ auth, logout }) => {
  const { Header } = Layout;
  const { isAuth, loading } = auth;
  return (
    <Header style={style}>
      <div className="logo" />

      <Menu
        mode="horizontal"
        defaultSelectedKeys={['/']}
        className="text-center"
        style={style}
      >
        <Menu.Item key="/">
          {' '}
          <Link to="/" style={style}>
            <Icon type="compass" theme="filled" twoToneColor="#eb2f96" />{' '}
            FastSearch
          </Link>
        </Menu.Item>

        {!isAuth && !loading && (
          <Menu.Item key="2">
            <Button size="large" type="danger">
              {' '}
              <Link to="/login">Sign In</Link>
            </Button>
          </Menu.Item>
        )}

        {isAuth && !loading && (
          <Menu.Item key="3">
            <Link to="/login" style={style}>Resource</Link>
          </Menu.Item>
        )}
        <Menu.Item key="4">About</Menu.Item>
        {isAuth && !loading && (
          <Menu.Item key="5">
            <Button size="large" type="danger " onClick={logout}>
              {' '}
              Logout
            </Button>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};
const style = {
  backgroundColor: '#003459',
  color: '#fff'
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(topHeader);
