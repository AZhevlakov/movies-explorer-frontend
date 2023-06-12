import './index.css';
import React, { Suspense } from 'react';
import Routing from '../pages';
import Preloader from '../components/Preloader/Preloader';

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Routing />
    </Suspense>
  );
};

export default App;
