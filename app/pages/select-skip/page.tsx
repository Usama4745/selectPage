// /pages/select-skip/page.tsx
'use client';

import { useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar';
import SkipCard from '../../components/SkipCard';
import FooterPopup from '../../components/FooterPopup';
import { useAppSelector } from '../../store/hooks';
import { Skip } from '../../types';

export default function SelectSkipPage() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const { postcode, area } = useAppSelector((state) => state.booking);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSkips(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (postcode && area) {
      fetchSkips();
    }
  }, [postcode, area]);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ProgressBar currentStep={3} />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-20 pb-20 gap-16 sm:p-20">
        <div className="text-white text-3xl">Choose Your Skip Size</div>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          {skips.length === 0 ? (
            <p>No skips available in this area.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
              {skips.map((skip) => (
                <SkipCard key={skip.id} skip={skip} />
              ))}
            </div>
          )}
        </main>
        <FooterPopup />
      </div>
    </div>
  );
}