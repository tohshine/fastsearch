import React from 'react';
import { List, Avatar, Icon, Typography } from 'antd';
import { connect } from 'react-redux';
import { getEntDetails, ClearEntDeatils } from '../../action/dataAction';


import { Link, withRouter } from 'react-router-dom';

const searchItem = props => {
  const { enterprice } = props;
  //?icon
  const IconText = ({ type, text, theme, twoToneColor }) => (
    <span>
      <Icon
        type={type}
        style={{ marginRight: 8 }}
        theme={theme}
        twoToneColor={twoToneColor}
      />
      {text}
    </span>
  );

  const details = id => {
    props.history.push(`/details/${id}`);
  };
  const { Text } = Typography;
  return (
    
      <List
        itemLayout="vertical"
        dataSource={enterprice}
        size="large"
        renderItem={item => (
          <List.Item
            style={{ cursor: 'pointer', color: '#fff' }}
            onClick={() => details(item._id)}
            actions={[
              <IconText
                type="environment"
                text={<Text style={styles}>{item.location}</Text>}
                theme="twoTone"
                twoToneColor="#eb2f96"
                key="list-vertical-star-o"
              />,
              <IconText
                type="phone"
                text={<Text style={styles}>{item.tel}</Text>}
                key="list-vertical-like-o"
                theme="twoTone"
              />,
              <IconText
                type="home"
                text={<Text style={styles}>{item.address}</Text>}
                theme="twoTone"
                twoToneColor="#000"
                key="list-vertical-message"
              />,
              <IconText
                type="tag"
                text={<Text style={styles}>{item.category}</Text>}
                theme="twoTone"
                twoToneColor="red"
                key="list-vertical-message"
              />
            ]}
            extra={
              <img
                width={200}
                alt="logo"
                src={item.imageUrl}
                style={{ width: 200, height: 200 }}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.imageUrl} />}
              title={
                <a
                  href=""
                  onClick={() => window.open(`${item.siteUrl}`, '').focus()}
                >
                  {<Text style={styles}>{item.name}</Text>}
                </a>
              }
              description={<Text style={styles}>{item.email}</Text>}
            />
            {item.services.length >= 150
              ? item.services.substring(0, 150) + '... Read more'
              : item.services}
          </List.Item>
        )}
      />
   
  );
};

const styles = {
  color: '#fff'
};
export default connect(null, { getEntDetails, ClearEntDeatils })(
  withRouter(searchItem)
);
