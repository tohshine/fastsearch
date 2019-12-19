import React from 'react';
import { Layout, Icon, Typography } from 'antd';

const topHeader = () => {
  const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
  });
  const { Footer } = Layout;
  const { Text } = Typography;
  return (
    <Layout>
      <Footer
        className=" text-center"
        style={{ height: '50', backgroundColor: '#6F1E51', color: '#fff' }}
      >
        <Text style={{ color: '#fff' }}>made with </Text>
        <Icon type="heart" theme="filled" style={{ color: '#eb2f96' }} />{' '}
        <Text strong>
          {' '}
          <span style={{ color: '#fff' }}> By Tohshine |</span>{' '}
          <IconFont type="icon-facebook" style={{ color: 'blue' }} />{' '}
          <span style={{ color: '#fff' }}>Tohshine |</span>{' '}
          <IconFont type="icon-twitter" style={{ color: '#00a8ff' }} />{' '}
          <span style={{ color: '#fff' }}>Tohshine</span>
        </Text>
      </Footer>
    </Layout>
  );
};

export default topHeader;
