import React from 'react';
import {  List, Avatar, Icon } from 'antd';
import { connect } from 'react-redux';
import { getEntDetails, ClearEntDeatils } from '../../action/dataAction';

import { Link, withRouter } from 'react-router-dom';

const searchItem = props => {
  //const { Meta } = Card;
  const {  enterprice } = props;
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

  return (
    <List
      itemLayout="vertical"
      dataSource={enterprice}
      size="large"
      renderItem={item => (
        <List.Item
          style={{ cursor: 'pointer'  }}
          onClick={() => details(item._id)}
          actions={[
            <IconText
              type="environment"
              text={item.location}
              theme="twoTone"
              twoToneColor="#eb2f96"
              key="list-vertical-star-o"
            />,
            <IconText
              type="phone"
              text={item.tel}
              key="list-vertical-like-o"
              theme="twoTone"
            />,
            <IconText
              type="home"
              text={item.address}
              theme="twoTone"
              twoToneColor="#000"
              key="list-vertical-message"
            />,
            <IconText
              type="tag"
              text={item.category}
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
                {item.name}
              </a>
            }
            description={item.email}
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
