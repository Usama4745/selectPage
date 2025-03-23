'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {


  const [skips, setSkips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        setSkips(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-white text-3xl">
        Choose Your Skip Size
      </div>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {skips.length === 0 ? (
          <p>No skips available in this area.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">

            {skips.map((skip) => (
              <div className="group relative rounded-lg  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 
                  border-[#2A2A2A] hover:border-[#0037C1]/50 
                  bg-[#1C1C1C] text-white cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
                    alt="4 Yard Skip"
                    width={800}
                    height={192}
                    className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                  />
                  {/* <div className="absolute top-3 right-2 z-20 bg-amber-500 text-white px-3 py-1 
                      rounded-full text-sm font-medium shadow-md"
                  >
                    {skip.size} Yards
                  </div> */}
                  {skip.allows_heavy_waste &&
                    (<div className="absolute bottom-3 right-2 z-20 bg-amber-800 text-white px-3 py-1 
                      rounded-full text-sm font-medium shadow-md">
                      Heavy Waste Ok
                    </div>)}
                  {skip.allowed_on_road && (
                    <div className="absolute bottom-3 right-2 z-20 bg-cyan-700 text-white px-3 py-1 
                      rounded-full text-sm font-medium shadow-md">
                      Allowed On Road
                    </div>
                  )}
                  <div className="absolute bottom-3 left-2 z-20 space-y-2" />
                </div>

                <div className="p-4 md:p-6 ">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                    {skip.size} Yard Skip
                  </h3>

                  <p className="text-sm text-gray-300 mb-4 md:mb-6">
                    {skip.hire_period_days} day hire period
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-xl md:text-2xl font-bold text-cyan-600">
                        £{skip.price_before_vat}
                      </span>
                      <span className="text-sm text-gray-300 ml-2">
                        / week + VAT
                      </span>
                    </div>
                  </div>

                  <button className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all 
                    flex items-center justify-center space-x-2
                    bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]"
                  >
                    <span>Select This Skip</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-4 h-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">


      </footer>
    </div>
  );
}
