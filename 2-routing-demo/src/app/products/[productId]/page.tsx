interface ProductDetailsProps {
  params: {
    productId: string;
  };
}

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return <h1>Details about product {params.productId} </h1>;
};
export default ProductDetails;
