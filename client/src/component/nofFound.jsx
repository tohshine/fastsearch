import React from 'react';
import { Result, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
const notFoundPage = () => {
  const { Text } = Typography;
  return (
    <Result
      status="404"
      title={<Text style={{ color: '#fff' }}>404</Text>}
      subTitle={
        <Text style={{ color: '#fff' }}>
          Sorry, the page you visited does not exist.
        </Text>
      }
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
};

export default notFoundPage;
