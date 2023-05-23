import React from 'react';
import classes from './ReAuthForm.module.css';
import { useSelector } from 'react-redux';
import { getPopupReauthentificateUser } from '@redux/slices/popupSlice';
import SigninForm from '@components/SigninForm/SignInForm';

const ReAuthForm = (props) => {
  return(
    <div>
      <SigninForm submitHandle={(email, password) => alert(email + " " + password)}/>
    </div>
  )
};

export default ReAuthForm;