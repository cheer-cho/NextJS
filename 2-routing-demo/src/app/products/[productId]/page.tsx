interface ProductDetailsProps {
  params: {
    productId: string;
  };
}

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return <div>Details about product {params.productId} </div>;
};
export default ProductDetails;
