'use client';

/**
 * This error is placed in side products folder,
 * however, this error is used for the productId's layout as well.
 *
 * This is considered as a layout ErrorBoundary component.
 */

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const refreshAndReset = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      {error.message} <button onClick={refreshAndReset}>Try again</button>
    </div>
  );
}
