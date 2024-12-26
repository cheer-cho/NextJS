// without page.tsx, the folder will not be recognized as a route
// without default export, a page will not be picked up by the router
// therefore BarChart and LineChart should be render inside Dashboard's return

const BarChart = () => {
  return <div>Bar Chart</div>;
};

const Dashboard = () => {
  return <div>Dashboard</div>;
};
export default Dashboard;
