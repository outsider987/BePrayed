import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '~/pages/Home';
import Page404 from '~/pages/Page404';

const lazyLoad = (
  Comp: React.LazyExoticComponent<React.ComponentType<any>>
) => {
  return (
    <Suspense fallback={<>加载中...</>}>
      <Comp />
    </Suspense>
  );
};
const HomeRoute = {
  path: '/',
  element: lazyLoad(React.lazy(() => import('~/pages/Home'))),
  icon: 'logo',
  children: [
    {
      path: '/demo',
      element: lazyLoad(React.lazy(() => import('~/pages/Home/Demo'))),
    },
  ],
};
const routes = [
  HomeRoute,
  {
    path: '*',
    element: <Page404 />,
    icon: 'logo',
  },
];

const MYRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export { MYRoutes, routes, HomeRoute };
