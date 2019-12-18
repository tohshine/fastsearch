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
      <Footer className=" text-center" style={{ height: '50' }}>
        <Text>made with </Text>
        <Icon type="heart" theme="filled" style={{color:'#eb2f96'}} />{' '}
        <Text strong>
          {' '}
          by Tohshine | <IconFont type="icon-facebook" style={{color:'blue'}} /> Tohshine
          | <IconFont type="icon-twitter" style={{color:'#00a8ff'}}/> Tohshine
        </Text>
        
      </Footer>
    </Layout>
  );
};

export default topHeader;
