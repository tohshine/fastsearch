import React from 'react';
import { Typography, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

const welcome = () => {
  const { Title, Text } = Typography;
  return (
    <div className="container">
      <div className="grid-2">
        <div className="card bg-light">
          <Title level={4} className="text-dark">
            Fast Search To Locate Any Buisness Enterprice Around You{' '}
            <span className="text-danger">Enterprise</span>
          </Title>
          <Title level={4} type="secondary">
            Get what you need by using this services
          </Title>
          <div className="grid-2">
            <div>
              <div>
                <Icon type="home" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Title level={4} strong>
                  Hotels
                </Title>
              </div>
              <div>
                <Icon type="insurance" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Title level={4} strong>
                  Finance
                </Title>
              </div>
              <div>
                <Icon type="shop" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Title level={4} strong>
                  mall
                </Title>
              </div>
              <div>
                <Icon type="car" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Title level={4} strong>
                  Insurance
                </Title>
              </div>
              <div>
                <Icon type="rest" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Title level={4} strong>
                  Bukateria
                </Title>
              </div>
            </div>
            <div>
              <div>
                <Icon type="home" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Title level={4} strong>
                  Home Services
                </Title>
              </div>
              <div>
                <Icon type="car" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Title level={4} strong>
                  Dealer
                </Title>
              </div>
              <div>
                <Icon
                  type="medicine-box"
                  theme="twoTone"
                  twoToneColor="#eb2f96"
                />{' '}
                <Title level={4} strong>
                  Clinics
                </Title>
              </div>
              <div>
                <Icon type="home" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Title level={4} strong>
                  Clubs
                </Title>
              </div>
              <div>
                <Icon type="home" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                <Title level={4} strong>
                  Torrist
                </Title>
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
            <Link to="/search">Fast Search</Link>
          </Button>
        </div>
        <div>
          <div className="text-dark card  ">
            <Title level={4} underline style={styles}>
              How Does it works
            </Title>
            <div>
              <Title level={4} style={styles}>
                1. Accept geolocation from browser location request
              </Title>
            </div>
            <div>
              <Title level={4} style={styles}>
                2. use chrome browser for better perfomance
              </Title>
            </div>
            <div>
              <Title level={4} style={styles}>
                3. Distance is calculated based on your current location
              </Title>
            </div>
            <div>
              <Title level={4} style={styles}>
                4.Search results is not lost
              </Title>
            </div>
          </div>
          <div className="card">
            <Text style={styles}>
              using mobile GPS to track each Enterprise location is under
              development....{' '}
              <Icon type="smile" theme="twoTone" twoToneColor="red" />
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  color: '#fff'
};
export default welcome;
