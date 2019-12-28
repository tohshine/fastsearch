import React from 'react';
import { Typography, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

const welcome = () => {
  const { Title, Text } = Typography;
  return (
    <div className="container">
      <section>
        <div style={style}>
          <Title level={2} style={{ color: '#fff' }}>
            Locate Any Buisness{' '}
            <span className="text-danger">Enterprise</span> Around You{' '}
          </Title>
          <p style={{ color: '#fff' }}>
            ....Relax and use our services to locate where you want go today!!
          </p>
        </div>
      </section>
      <div
        className="grid-2"
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="card bg-light">
          <Title level={3} underline style={{color:"00171F"}}>
            Services
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
            <Text strong underline style={blue}>
              How does it work
            </Text>
            <div>
              <Text strong style={blue}>
                1. Accept geolocation request from browser location request
              </Text>
            </div>
            <div>
              <Text strong style={blue}>
                2. Use chrome browser for better perfomance
              </Text>
            </div>
            <div>
              <Text strong style={blue}>
                3. Distance is calculated based on your current location
              </Text>
            </div>
            <div>
              <Text strong style={blue}>
                4.Search results is not lost
              </Text>
            </div>
          </div>
          <div className="card">
            <Text style={blue}>
               Mobile GPS  tracking on each Enterprise locations is under
              development....{' '}
              <Icon type="smile" theme="twoTone" twoToneColor="red" />
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
const style = {
  fontFamily: 'BioRhyme',
  marginTop: '0rem',
  left: '0',
  position: 'absolute',
  textAlign: 'center',
  top: '30px',
  width: '100%'
};

const blue = {
  color: '#fff'
};
export default welcome;
