// /app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from './store/hooks';
import { reset } from './store/bookingSlice';

export default function HomePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Reset the Redux state to ensure a fresh start
    dispatch(reset());
    // Redirect to the select-skip page
    router.push('/select-skip');
  }, [dispatch, router]);

  // Return null since the user will be redirected immediately
  return null;
}