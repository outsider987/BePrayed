import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import HomeWrapper from '~/layouts/HomeWrapper';

const Home = () => {
  return (
    <HomeWrapper>
      {useLocation().pathname !== '/' ? <Outlet /> : <Navigate to={'/demo'} />}
    </HomeWrapper>
  );
};
export default Home;
