import React from 'react';

import {
  Form,
  Input,
  Icon,
  Select,
  Upload,
  Alert,
  Button,
  AutoComplete,
  Typography,
  message
} from 'antd';

const information = props => {
  const { Title, Text } = Typography;
  const { TextArea } = Input;
  const { Option } = Select;

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
  };

  const { values, onhandleChange, prevStep, nextStep } = props;
 

  const { validateFields, getFieldDecorator } = props.form;

  const next = e => {
    validateFields((err, value) => {
      if (!err) {
        
        onhandleChange(value);
        nextStep();
      }
    });
  };
  const normFile = e => {
    
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div className="container">
      <div className=" card grid-2">
        <div className="card bg-light">
          <Text>step 2 of 3</Text>
          <Title>Information</Title>
          <Form {...formItemLayout}>
            <Form.Item label="Upload" extra="picture must be 1400 x 500">
              {getFieldDecorator('image', {
                rules: [{ required: true, message: 'upload an image' }],
                valuePropName: 'fileList',
                getValueFromEvent: normFile
              })(
                <Upload name="logo" listType="picture">
                  <Button>
                    <Icon type="upload" /> Click to upload
                  </Button>
                </Upload>
              )}
            </Form.Item>

            <Form.Item label="url">
              {getFieldDecorator('siteUrl', {
                rules: [{ required: true, message: 'Please input website!' }],
                initialValue: `${values.siteUrl}`
              })(
                <AutoComplete placeholder="website">
                  <Input />
                </AutoComplete>
              )}
            </Form.Item>

            <Form.Item label="services">
              {getFieldDecorator('services', {
                rules: [
                  {
                    required: true,
                    message:
                      'Please input the Activities perform inside the enterprise'
                  }
                ],
                initialValue: `${values.services}`
              })(<TextArea rows={4} />)}
            </Form.Item>

            <Form.Item label="Category" hasFeedback>
              {getFieldDecorator('category', {
                rules: [
                  { required: true, message: 'Please select your category' }
                ],
                initialValue: `${values.category}`
              })(
                <Select placeholder="Please select a category">
                  <Option value="Finace">Finance</Option>
                  <Option value="Mall">Mall</Option>
                  <Option value="Insurance">Insurance</Option>
                  <Option value="Torrist">Torrist</Option>
                  <Option value="Hotels">Hotels</Option>
                  <Option value="Bukaterial">Bukaterial</Option>
                  <Option value="Dealers">Dealers</Option>
                  <Option value="Clubs">Clubs</Option>
                  <Option value="Home Services">Home Services</Option>
                  <Option value="Clinics">Clinics</Option>
                </Select>
              )}
            </Form.Item>

            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <Form.Item style={{ marginRight: '10px' }}>
                <Button type="primary" onClick={prevStep}>
                  <Icon type="left" />
                  Prev
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={next}>
                  Next
                  <Icon type="right" />
                </Button>
              </Form.Item>
            </div>
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
            message="Picture"
            description="picture of the enterprise must be taken to "
            type="info"
            showIcon
          />
          <br />
          <Alert
            message="Website Url"
            description="the url of your website should be valid and accessible"
            type="info"
            showIcon
          />
          <br />
          <Alert
            message="services"
            description="This must contain all activities the enterprise does "
            type="info"
            showIcon
          />

          <br />
          <Alert
            message="categories"
            description="select which category your enterprice fall in "
            type="info"
            showIcon
          />
        </div>
      </div>
    </div>
  );
};
const WrappedDemo = Form.create({ name: 'validate_other' })(information);
export default WrappedDemo;
