import { Metadata } from 'next';

type ProductDetailsProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params: { productId },
}: ProductDetailsProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return <h1>Details about product {params.productId} </h1>;
};
export default ProductDetails;
