import { Metadata } from 'next';

type ProductDetailsProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: ProductDetailsProps): Promise<Metadata> => {
  const { productId } = await params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { productId } = await params;
  return <h1>Details about product {productId} </h1>;
};
export default ProductDetails;
