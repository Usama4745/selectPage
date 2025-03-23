// /app/select-skip/page.tsx
'use client';

import { useState, useEffect } from 'react';
import SkipCard from '../components/SkipCard';
import FooterPopup from '../components/FooterPopup';
import ProgressBar from '../components/ProgressBar';
import { Skip } from '../types';

export default function SelectSkipPage() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        console.log("consoe data")
        console.log(data)

        const mappedSkips: Skip[] = data.map((item: any) => ({
          id: item.id,
          size: item.size,
          hire_period_days: item.hire_period_days,
          price_before_vat: item.price_before_vat,
          allows_heavy_waste: item.allows_heavy_waste,
          allowed_on_road: item.allowed_on_road,
        }));

        setSkips(mappedSkips);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch skips. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ProgressBar currentStep={3} /> {/* Add ProgressBar with currentStep=3 */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-20 pb-20 gap-16 sm:p-20">
        <div className="text-white text-3xl">Choose Your Skip Size</div>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          {loading ? (
            <p className="text-white">Loading skips...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : skips.length === 0 ? (
            <p className="text-white">No skips available in this area.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
              {skips.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  setSelectedSkip={setSelectedSkip}
                  selectedSkip={selectedSkip}
                />
              ))}
            </div>
          )}
        </main>
        <FooterPopup selectedSkip={selectedSkip} setSelectedSkip={setSelectedSkip} />
      </div>
    </div>
  );
}