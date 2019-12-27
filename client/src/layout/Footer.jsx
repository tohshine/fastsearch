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
        style={style}
      >
        <Text style={style}>made with </Text>
        <Icon type="heart" theme="filled" style={{ color: '#eb2f96' }} />{' '}
        <Text strong>
          {' '}
          <span style={style}> By Tohshine |</span>{' '}
          <IconFont type="icon-facebook" style={{ color: 'blue' }} />{' '}
          <span style={style}>Tohshine |</span>{' '}
          <IconFont type="icon-twitter" style={{ color: '#00a8ff' }} />{' '}
          <span style={style}>Tohshine</span>
        </Text>
      </Footer>
    </Layout>
  );
};

const style={
  color:'#fff',
  backgroundColor:'#003459'
}
export default topHeader;
