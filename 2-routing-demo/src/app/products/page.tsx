import Link from 'next/link';

const ProductList = () => {
  const productId = 100;
  return (
    <div>
      <Link href='/'>Home</Link>
      <h1>Product list</h1>
      <Link href='products/1'>Product 1</Link>
      <br />
      <Link href='products/2'>Product 2</Link>
      <br />
      <Link href='products/3' replace>
        Product 3
      </Link>
      <br />
      <Link href={`products/${productId}`}>Product {productId}</Link>
    </div>
  );
};
export default ProductList;
