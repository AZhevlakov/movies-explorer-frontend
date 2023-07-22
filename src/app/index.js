import './index.css';
import React, { useEffect, useMemo, useState } from 'react';
import Routing from '../pages';
import { AuthContext } from '../contexts/AuthContext';
import * as api from '../utils/api/MainApi';
import LoaderLayout from '../pages/components/LoaderLayout/LoaderLayout';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoddedIn, setIsLoggedIn] = useState(false);
  const [isCheckAuthorization, setIsCheckAuthorization] = useState(false);

  const contextAuthValue = useMemo(() => ({
    currentUser,
    setCurrentUser,
  }), [currentUser]);

  const checkAuthorization = () => {
    if (localStorage.getItem('token')) {
      api.getUserInfo()
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setIsLoggedIn(true);
          }
        })
        .catch(err => alert(err))
        .finally(() => setIsCheckAuthorization(prev => !prev));
    } else {
      setIsCheckAuthorization(prev => !prev);
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, [isLoddedIn]);

  return (
    <AuthContext.Provider value={contextAuthValue}>
      {isCheckAuthorization ? <Routing /> : <LoaderLayout />}
    </AuthContext.Provider>
  );
};

export default App;
