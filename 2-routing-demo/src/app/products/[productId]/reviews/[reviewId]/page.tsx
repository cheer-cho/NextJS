import { notFound } from 'next/navigation';

type ReviewDetailProps = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ReviewDetail = async ({ params }: ReviewDetailProps) => {
  const { productId, reviewId } = await params;
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('Error loading review');
  }

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
