import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Icon,
  Alert,
  Button,
  Typography,
  notification,
  message,
  Select
} from 'antd';
import { connect } from 'react-redux';
import { GetLocation, GetState } from '../../action/geoAction';

const BioData = props => {
  const { Title, Text } = Typography;
  const { Search } = Input;
  const { Option } = Select;

  useEffect(() => {
    props.GetState();
    return () => {};
  }, []);

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
  };
  const {
    values,
    onhandleChange,
    nextStep,
    geoAddress,
    state,
    prevStep
  } = props;

  //? antd api
  const { validateFields, getFieldDecorator } = props.form;

  const [userLoc, setAddress] = useState({
    location: '',
    cords: ''
  });

  //?final form submition
  const onNext = () => {
    if (userLoc.location === '') return errorNotification();
    validateFields((err, values) => {
      if (!err) {
        onhandleChange(values);
        nextStep();
      }
    });
  };

  //? success notification message
  const openNotification = () => {
    notification.success({
      message: `Notification`,
      description: 'your Location has been saved'
    });
  };

  //? error notification message
  const errorNotification = () => {
    notification.error({
      message: `Notification`,
      description: 'please search for location and click save'
    });
  };
  //?location search function
  const onSearch = value => {
    props.GetLocation(value);
    message.loading('Getting your loaction..', 2.5).then(() => {
      {
        geoAddress && message.success('Location loaded', 2.5);
      }
    });
  };

  return (
    <div className="container">
      <Button
        type="danger"
        className="m-1"
        onClick={() => {
          prevStep();
        }}
      >
        Go Back
      </Button>
      <div className=" card grid-2">
        <div className="card bg-light">
          <Text>step 1 of 3</Text>
          <Title>Company Bio data</Title>
          <Form {...formItemLayout}>
            {/*  //?name */}
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [
                  { required: true, message: 'Please input feild name!' }
                ],
                initialValue: `${values.name}`
              })(<Input />)}
            </Form.Item>
            {/*   //?email */}
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'email feild cannot be empty' }
                ],
                initialValue: `${values.email}`
              })(<Input />)}
            </Form.Item>
            {/*  //?tel */}
            <Form.Item label="Tel">
              {getFieldDecorator('tel', {
                rules: [{ required: true, message: 'telphone feild is empty' }],
                initialValue: `${values.tel}`
              })(<Input />)}
            </Form.Item>

            {/* //?state location */}
            <Form.Item label="Location" hasFeedback>
              {getFieldDecorator('location', {
                rules: [{ required: true, message: 'Please select your sate' }],
                initialValue: `${values.location}`
              })(
                <Select placeholder="choose your state">
                  {state !== null &&
                    state.map(st => (
                      <Option key={st.Name} value={st.Name}>
                        {st.Name}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>

            {/*  //?hidden input for address */}
            <Form.Item>
              {getFieldDecorator('address', {
                rules: [
                  { required: true, message: 'location feild cannot be empty' }
                ],
                initialValue: userLoc
              })(<Input hidden />)}
            </Form.Item>
            {/*//?searched location */}
            <Form.Item label="Search location">
              {getFieldDecorator('loc', {
                rules: [
                  { required: true, message: 'location feild cannot be empty' }
                ],
                initialValue: `${userLoc.location}`
              })(
                <Search placeholder="search your address" onSearch={onSearch} />
              )}
            </Form.Item>
            {/*    //?location result */}
            {geoAddress !== null && geoAddress !== undefined && (
              <Button
                style={{ marginBottom: '15px' }}
                onClick={() => {
                  setAddress({
                    ...userLoc,
                    location: geoAddress.formatted_address,
                    cords: geoAddress.geometry.location
                  });
                  /*   //?notification trigger */
                  openNotification();
                }}
              >
                <Icon type="environment" />
                {geoAddress.formatted_address}
              </Button>
            )}
            {/*   //?form submission */}
            <Form.Item>
              <Button type="primary" onClick={onNext}>
                Next
                <Icon type="right" />
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <Alert
            message="Hints"
            description="Information entered must be correct"
            type="info"
            showIcon
          />
          <br />
          <Alert
            message="Name"
            description="Name must be the exact Enterprise name "
            type="info"
            showIcon
          />
          <br />
          <Alert
            message="Email"
            description="must be a correct and valid email"
            type="info"
            showIcon
          />
          <br />
          <Alert
            message="Address"
            description="input your addess and press the search button to get the precise geolocation.and click your location to save"
            type="info"
            showIcon
          />
        </div>
      </div>
    </div>
  );
};

const WrappedDemo = Form.create({ name: 'validate_other' })(BioData);

const mapStateToProps = state => ({
  geoAddress: state.geoLocation.address,
  state: state.geoLocation.state
});
export default connect(mapStateToProps, { GetLocation, GetState })(WrappedDemo);
