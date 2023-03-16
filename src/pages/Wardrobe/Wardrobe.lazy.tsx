import React, { lazy, Suspense } from 'react';

const LazyWardrobe = lazy(() => import('./Wardrobe'));

const Wardrobe = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWardrobe {...props} />
  </Suspense>
);

export default Wardrobe;
