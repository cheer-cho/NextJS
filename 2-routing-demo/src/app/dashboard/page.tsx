// without page.tsx, the folder will not be recognized as a route
// without default export, a page will not be picked up by the router
// therefore BarChart and LineChart should be render inside Dashboard's return

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'dashboard absolute',
  },
};

const BarChart = () => {
  return <h1>Bar Chart</h1>;
};

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};
export default Dashboard;
