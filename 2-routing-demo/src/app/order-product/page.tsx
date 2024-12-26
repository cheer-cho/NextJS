'use client';

import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing your order');
    router.push('/');
    // router.replace('/')
    // router.back();
    // router.forward();
  };
  return (
    <>
      <div>Order product</div>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
