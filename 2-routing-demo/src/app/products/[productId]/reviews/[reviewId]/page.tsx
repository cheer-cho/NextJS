type ReviewDetailProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewDetail = ({
  params: { productId, reviewId },
}: ReviewDetailProps) => {
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
};
export default ReviewDetail;
