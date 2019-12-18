import React, { useState, useEffect } from 'react';
import BioData from './biodata';
import Information from './information';
import Confirmation from './confirmation';
import Profile from './profile';
import { addProfile, editProfile } from '../../action/dataAction';
import { loadUser, clearErrors } from '../../action/authAction';
import { connect } from 'react-redux';
import { message } from 'antd';

const Form = props => {
  useEffect(() => {
    props.loadUser();

    return () => {
      // props.clearErrors();
    };
  }, []);

  const [step, setStep] = useState(1);

  //?add and update state are together i.e image is the file and imageUrl is the link from mongodb
  const [form, setForm] = useState({
    _id: '',
    name: '',
    email: '',
    category: '',
    siteUrl: '',
    services: '',
    tel: '',
    address: '',
    imageUrl: '',
    location: ''
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onhandleChange = input => {
    setForm({
      ...form,
      ...input
    });
  };
  const {
    name,
    email,
    category,
    siteUrl,
    services,
    location,
    tel,
    address,
    image,
    _id,
    imageUrl
  } = form;

  const onSubmit = e => {
    e.preventDefault();
    if (form._id) {
      const pic = image[0].originFileObj;
      const formData = new FormData();
      formData.append('file', pic);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('siteUrl', siteUrl);
      formData.append('services', services);
      formData.append('tel', tel);
      formData.append('address', address.location);
      formData.append('category', category);
      formData.append('cord_lat', address.cords.lat);
      formData.append('cord_long', address.cords.lng);
      formData.append('imageUrl', imageUrl);
      formData.append('location', location);

      props.editProfile(form._id, formData);

      message.success('Data updated');
      setStep(1);
    } else {
      const pic = image[0].originFileObj;
      const formData = new FormData();
      formData.append('file', pic);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('siteUrl', siteUrl);
      formData.append('services', services);
      formData.append('tel', tel);
      formData.append('address', address.location);
      formData.append('category', category);
      formData.append('cord_lat', address.cords.lat);
      formData.append('cord_long', address.cords.lng);
      formData.append('location', location);
      props.addProfile(formData);

      message.success('Data uploaded');
      setStep(1);
    }
  };

  const values = {
    name,
    email,
    category,
    siteUrl,
    services,
    tel,
    address,
    image,
    _id,
    imageUrl,
    location
  };

  switch (step) {
    case 1:
      return <Profile nextStep={nextStep} onhandleChange={onhandleChange} />;
    case 2:
      return (
        <BioData
          nextStep={nextStep}
          onhandleChange={onhandleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Information
          nextStep={nextStep}
          prevStep={prevStep}
          onhandleChange={onhandleChange}
          values={values}
        />
      );
    case 4:
      return (
        <Confirmation values={values} prevStep={prevStep} onSubmit={onSubmit} />
      );
    default:
      return;
  }
};

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps, {
  addProfile,
  editProfile,
  loadUser,
  clearErrors
})(Form);
