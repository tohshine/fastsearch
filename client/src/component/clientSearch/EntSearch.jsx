import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchItem from './searchItem';

import {
  Form,
  Input,
  Icon,

  Button,
  Typography,
  Spin,
 
  Select
} from 'antd';
import { connect } from 'react-redux';
import {
  getAllEnt,
  getByCategory,
  filterCompany,
  ClearFilter
} from '../../action/dataAction';

const EntSearch = props => {
  const { Title, Text } = Typography;
  const { Search } = Input;
  const { Option } = Select;

  useEffect(() => {
    props.getAllEnt();
    props.ClearFilter();
   
    return () => {
     
    };
  }, []);

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
  };

  const { allProfile, filteredCompany } = props;

  const categorySelect = value => {
    props.getByCategory({ category: value });
  };

  const onChange = e => {
    

    props.filterCompany(e.target.value);
  };

  return (
    <div className="container">
      <Button type="danger" className="m-1">
        <Link to="/">
          <Icon type="left" />
          Go Back
        </Link>
      </Button>

      <div className="card">
        <div className="card bg-light">
          <Title>Sort</Title>

          <Form {...formItemLayout}>
            <Form.Item label="Select category">
              <Select
                placeholder="Please select a category"
                onChange={categorySelect}
              >
                <Option value="Finace">Finance</Option>
                  <Option value="Mall">Mall</Option>
                  <Option value="Insurance">Insurance</Option>
                  <Option value="Torrist">Torrist</Option>
                  <Option value="Hotels">Hotels</Option>
                  <Option value="Bukaterial">Bukaterial</Option>
                  <Option value="Dealers">Dealers</Option>
                  <Option value="Clubs">Clubs</Option>
                  <Option value="Home Services">Home Services</Option>
                  <Option value="Clinics">Clinics</Option>
              </Select>
            </Form.Item>

            {/*//?searched location */}
            <Form.Item label="Search location">
              <Search placeholder="company name" onChange={onChange} />
            </Form.Item>
          </Form>
        </div>
        <div className="card">
          {allProfile === null ? (
            <div className="text-center">
              {' '}
              <Spin size="large" />
            </div>
          ) : filteredCompany !== null ? (
            <SearchItem enterprice={filteredCompany} />
          ) : (
            <SearchItem enterprice={allProfile} />
          )}
        </div>
      </div>
    </div>
  );
};

const WrappedDemo = Form.create({ name: 'validate_other' })(EntSearch);

const mapStateToProps = state => ({
  allProfile: state.profile.companies,
  filteredCompany: state.profile.filteredCompany
});
export default connect(mapStateToProps, {
  getAllEnt,
  getByCategory,
  filterCompany,
  ClearFilter
})(WrappedDemo);
