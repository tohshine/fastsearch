import React, { useEffect } from 'react';
import { Form, Icon, Input, Button, Alert, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, clearErrors, setLoading } from '../../action/authAction';
import { Redirect } from 'react-router-dom';


const LoginFile = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const { isAuth, loading, error } = props.auth;

  useEffect(() => {
    return () => {
      props.clearErrors();
    };
  }, []);

  if (isAuth && !loading) {
    return <Redirect to="/start" />;
  }

  //?form validation and submit
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        props.setLoading();
        const { email, password } = values;
        props.login({ email, password });
        props.clearErrors();
      }
    });
  };

  //?auth response from server

  //alert(error);

  const { Title } = Typography;

  if (isAuth) return <Redirect to="/start" />;
  return (

    <div className="form-container ">
    <div className="card bg-light">
      <Title>Login</Title>
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          closable
        />
      
      )}
      <br />
      <br />
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        <Button
          block
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading && true}
        >
          Log in
        </Button>
        <br />
        Or{' '}
        <Button type="link">
          <Link to="create_account">register now!</Link>
        </Button>
      </Form>
    </div>
    </div>
  );
};
const GetLoginWrapper = Form.create({ name: 'normal_login' })(LoginFile);

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { login, clearErrors, setLoading })(
  GetLoginWrapper
);
