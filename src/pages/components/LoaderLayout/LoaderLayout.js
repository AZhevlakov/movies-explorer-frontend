import './LoaderLayout.css';
import React from 'react';
import Preloader from '../../../components/Preloader/Preloader';

const LoaderLayout = () => {
  return (
    <div className='load-wrapper'>
      <Preloader />
    </div>
  );
};

export default LoaderLayout;
