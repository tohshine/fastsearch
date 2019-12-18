import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getEntDetails, ClearEntDeatils } from '../../action/dataAction';
import { Typography, Avatar, Tag, Icon,Spin } from 'antd';
import { usePosition } from 'use-position';
import calculator from '../calculator';
const Details = props => {
  const { getEntDetails, ClearEntDeatils, profile } = props;
  const { Text, Title, Paragraph } = Typography;
  useEffect(() => {
    getEntDetails(props.match.params.id);
    return () => {
      ClearEntDeatils();
    };
  }, []);

  //?client co-ordinate fro usePosition hooks
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);
  
  return (
    <div className="container c">
      <div className="card">
        <div className="card bg-light">
          {profile === null ? (
             <div className="text-center">
             {' '}
             <Spin size="large" />
           </div>
          ) : (
            <Fragment>
              <div className="card grid-2">
                <div className="">
                  <div className="text-center">
                    <Avatar size={100} icon="user" src={profile.imageUrl} />
                  </div>

                  <div className="m-1 text-center">
                    <Text strong>status:</Text> <Tag color="green">Active</Tag>
                  </div>
                  <div className="m-1 text-center">
                    <Tag color="blue" style={{ width: '100px' }}>
                      Location
                    </Tag>{' '}
                    <Text strong>{profile.location} state</Text>
                  </div>
                  <div className="m-1 text-center">
                    <Tag color="red" style={{ width: '100px' }}>
                      Distance
                    </Tag>{' '}
                    <Text type="secondary">
                      {calculator(
                        latitude,
                        longitude,
                        profile.cord_lat,
                        profile.cord_long
                      )}
                    </Text>
                  </div>
                </div>
                <div>
                  <Title level={3}>{profile.name}</Title>
                  <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <Tag color="#f50" style={{ width: '100px' }}>
                      Our Address
                    </Tag>{' '}
                    <Text strong>{profile.address}</Text>
                  </div>
                  <div>
                    <Tag color="#108ee9" style={{ width: '100px' }}>
                      Website Address
                    </Tag>{' '}
                    <a href={profile.siteUrl}>{profile.siteUrl}</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <Title level={4}>Our Services:</Title>
                <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                  {profile.services}
                </Paragraph>
              </div>
              <div className="card">
                <Title level={4}>Contact Us:</Title>
                <Text>
                  <Icon type="mail" theme="twoTone" twoToneColor="#eb2f96" />{' '}
                  {profile.email}
                </Text>
                <div style={{ marginTop: '10px' }}>
                  <Text>
                    <Icon type="phone" theme="twoTone" /> {profile.tel}
                  </Text>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  profile: state.profile.companyDetails
});
export default connect(mapStateToProps, { ClearEntDeatils, getEntDetails })(
  Details
);
