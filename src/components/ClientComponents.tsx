'use client';

import dynamic from 'next/dynamic';

// Dynamically import 3D components to avoid SSR issues
const Background3D = dynamic(() => import('@/components/Background3D'), {
  ssr: false,
  loading: () => null,
});

const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), {
  ssr: false,
});

const Navigation = dynamic(() => import('@/components/Navigation'), {
  ssr: true,
});

export default function ClientComponents() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <Background3D />
    </>
  );
}
