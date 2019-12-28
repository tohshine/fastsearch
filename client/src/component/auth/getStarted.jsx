import React, { useEffect } from 'react';
import { Form, Icon, Input, Button, Typography, Alert, message } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register, clearErrors } from '../../action/authAction';

const GetStarted = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const { isAuth, loading, error } = props.auth;

  useEffect(() => {
    props.clearErrors();
    if (!Array.isArray(error) && error !== null) {
      message.error(error);
    } else if (Array.isArray(error) && error.msg !== null) {
      const err= error[0]
      message.error(err.msg)
    }

    return () => {};
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
       
        if (values.password !== values.password2) {
          message.error('password mismatch');
        } else {
          const { name, email, password } = values;
          props.register({
            name: name,
            email: email.toLowerCase(),
            password: password
          });
        }
      }
    });
  };

  if (isAuth) return <Redirect to="/start" />;
  const { Title } = Typography;
  return (
    <div className="form-container ">
      <div className="card bg-light">
        <Title className="text-dark">Account Creation</Title>

        <Form className="login-form">
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your Name!' }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Name"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your Email!' }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password2', {
              rules: [
                { required: true, message: 'Please repeat your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder=" Repeat password"
              />
            )}
          </Form.Item>

          <Button
            block
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleSubmit}
          >
            Create Account
          </Button>
        </Form>
      </div>
    </div>
  );
};

const GetStartedWrapper = Form.create({ name: 'normal_login' })(GetStarted);

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { register, clearErrors })(
  GetStartedWrapper
);
