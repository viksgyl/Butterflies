/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentPageLayout from '../components/layouts/PageLayouts/PaymentPageLayout';
import { useDispatch } from 'react-redux';
import { refreshPage } from '../store/feature/authSlice';
import tradly from 'tradly';
import { TYPE_CONSTANT } from '../constant/Web_constant';
import axios from 'axios';


const Payment = (props) => {
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('refresh_key')) {
      dispatch(
        refreshPage({
          key: localStorage.getItem('refresh_key'),
        })
      );
    }
  }, [dispatch]);

  const stripePromise = loadStripe(
    TYPE_CONSTANT.PAYMENT_CONFIGS?.stripe_api_publishable_key
  );
  return (
    <Elements stripe={stripePromise}>
      <PaymentPageLayout />
    </Elements>
  );
};

export default Payment;
