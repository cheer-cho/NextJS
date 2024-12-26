import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link href='/blog'>Blog</Link>
      <br />
      <Link href='/products'>Products</Link>
    </>
  );
};
export default Home;
