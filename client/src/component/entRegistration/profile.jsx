import React, { useEffect } from 'react';
import { Button, Avatar, Tag, Typography, Descriptions, Spin } from 'antd';
import { connect } from 'react-redux';
import { getProfile, clearErrors } from '../../action/dataAction';
const Profile = ({
  nextStep,
  onhandleChange,
  getProfile,
  clearErrors,
  profile,
  auth
}) => {
  const { Text } = Typography;

  useEffect(() => {
    getProfile();
    return () => {
      clearErrors();
    };
  }, []);
  const { companyProfile, loading } = profile;
  const editConfig = () => {
    onhandleChange(companyProfile);

    nextStep();
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card grid-3 bg-light" style={{ alignItems: 'center' }}>
          <div>
            <Avatar size={64} icon="user" />
          </div>

          <div>
            <span>
              <Text strong>Logged in as:</Text> <Text>{auth && auth.name}</Text>
            </span>
            <br />
            <span>
              <Text strong>Email:</Text> <Text>{auth && auth.email}</Text>
            </span>
          </div>

          <div>
            <Text strong>status:</Text> <Tag color="green">Active</Tag>
          </div>
        </div>

        <div className="card bg-light">
          { companyProfile === null && loading ? (
            <div className="text-center">
              <div className="text-center">
                {' '}
                <Spin size="small" Tag="loading..." className="text-center" />
              </div>
            </div>
          ) : (
            <Descriptions title="Enterprise Info">
              <Descriptions.Item label="Name">
                {companyProfile.name}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {companyProfile.email}
              </Descriptions.Item>

              <Descriptions.Item label="Tel">
                {companyProfile.tel}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {companyProfile.address}
              </Descriptions.Item>
              <Descriptions.Item label="Category">
                {companyProfile.category}
              </Descriptions.Item>
              <Descriptions.Item label="Services">
                {companyProfile.services}
              </Descriptions.Item>
              <Descriptions.Item label="Website Url">
                <a href="#!">{companyProfile.siteUrl}</a>
              </Descriptions.Item>
              <Descriptions.Item label="Picture">
                <Avatar
                  shape="square"
                  size={100}
                  src={companyProfile.imageUrl}
                />
              </Descriptions.Item>
              <Descriptions.Item label="Location">
                {companyProfile.location}
              </Descriptions.Item>
            </Descriptions>
          )}
        </div>
        {!companyProfile ? (
          <Button type="primary" style={{ width: '100px' }} onClick={nextStep}>
            add
          </Button>
        ) : (
          <Button type="danger" onClick={editConfig}>
            Edit configuration
          </Button>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth.user
});
export default connect(mapStateToProps, { getProfile, clearErrors })(Profile);
