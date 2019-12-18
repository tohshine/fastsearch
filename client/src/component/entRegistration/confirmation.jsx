import React from 'react';
import { Typography, Button, Icon, Descriptions } from 'antd';

const confirmation = props => {
  const { Title, Text, Paragraph } = Typography;

  const { values, prevStep, onSubmit } = props;

  const { name, email, address, tel, category, services, siteUrl, image,location } = values;

  return (
    <div className="container ">
      <div className="card">
        <div className="card bg-light text-center">
          <Descriptions title="Enterprise Info">
            <Descriptions.Item label="Name">{name}</Descriptions.Item>
            <Descriptions.Item label="Email">{email}</Descriptions.Item>

            <Descriptions.Item label="Tel">{tel}</Descriptions.Item>
            <Descriptions.Item label="Address">
              {address.location}
            </Descriptions.Item>
            <Descriptions.Item label="Category">{category}</Descriptions.Item>
            <Descriptions.Item label="Services">{services}</Descriptions.Item>
            <Descriptions.Item label="Website Url">{siteUrl}</Descriptions.Item>
            <Descriptions.Item label="Location">{location}</Descriptions.Item>
          </Descriptions>
        </div>
        <div>
          {' '}
          <Button type="danger" style={{ margin: '10px' }} onClick={prevStep}>
            preview form
          </Button>{' '}
          <Button style={{ margin: '10px' }} type="success" onClick={onSubmit}>
            confirm & submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default confirmation;
