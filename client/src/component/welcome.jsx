import React from 'react';
import { Typography, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

const welcome = () => {
  const { Title, Text } = Typography;
  return (
    <div className="container" >
      <div className="grid-2" style={{alignItems:"center",justifyContent:"center" ,marginTop:100}}>
        <div className="card bg-light">
          <Title level={4} className="text-dark">
            Fast Search To Locate Any Buisness{' '}
            <span className="text-danger">Enterprise</span> Around You{' '}
          </Title>

          <div className="grid-2">
            <div>
              <div>
                <Icon type="home" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Text strong>Hotels</Text>
              </div>
              <div>
                <Icon type="insurance" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Text strong>Finance</Text>
              </div>
              <div>
                <Icon type="shop" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Text strong>mall</Text>
              </div>
              <div>
                <Icon type="car" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Text strong>Insurance</Text>
              </div>
              <div>
                <Icon type="rest" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Text strong>Bukateria</Text>
              </div>
            </div>
            <div>
              <div>
                <Icon type="home" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Text strong>Home Services</Text>
              </div>
              <div>
                <Icon type="car" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Text strong>Dealer</Text>
              </div>
              <div>
                <Icon
                  type="medicine-box"
                  theme="twoTone"
                  twoToneColor="#eb2f96"
                />{' '}
                <Text strong>Clinics</Text>
              </div>
              <div>
                <Icon type="home" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Text strong>Clubs</Text>
              </div>
              <div>
                <Icon type="home" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Text strong>Torrist</Text>
              </div>
            </div>
          </div>

          <Button
            type="primary"
            block
            style={{ marginTop: '10px', height: '50px' }}
          >
            <Link to="/create_account"> Get started</Link>
          </Button>
          <br />
          <br />
          <Button type="danger" block style={{ height: '50px' }}>
            <Link to="/find">Fast Search</Link>
          </Button>
        </div>
        <div>
          <div className="text-dark card  ">
            <Text strong underline>
              How does it work
            </Text>
            <div>
              <Text strong>
                1. Accept geolocation request from browser location request
              </Text>
            </div>
            <div>
              <Text strong>2. Use chrome browser for better perfomance</Text>
            </div>
            <div>
              <Text strong>
                3. Distance is calculated based on your current location
              </Text>
            </div>
            <div>
              <Text strong>4.Search results is not lost</Text>
            </div>
          </div>
          <div className="card">
            <Text>
              Using mobile GPS to track each Enterprise location is under
              development....{' '}
              <Icon type="smile" theme="twoTone" twoToneColor="red" />
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default welcome;
