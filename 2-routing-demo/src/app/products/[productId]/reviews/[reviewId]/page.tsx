import { notFound } from 'next/navigation';

type ReviewDetailProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewDetail = ({
  params: { productId, reviewId },
}: ReviewDetailProps) => {
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
};
export default ReviewDetail;
