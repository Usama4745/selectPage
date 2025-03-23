// /components/SkipCard.tsx
'use client';

import Image from 'next/image';
import { Skip } from '../types';

interface SkipCardProps {
  skip: Skip;
  setSelectedSkip: (skip: Skip | null) => void;
  selectedSkip: Skip | null;
}

export default function SkipCard({ skip, setSelectedSkip, selectedSkip }: SkipCardProps) {
  const handleSelect = () => {
    setSelectedSkip(skip);
  };

  // Check if this skip is the currently selected one
  const isSelected = selectedSkip && selectedSkip.id === skip.id;

  return (
    <div
      onClick={handleSelect}
      className={`group relative rounded-lg transition bg-neutral-800 delay-150 duration-300 ease-in-out hover:-translate-y-1 
        border-4 ${isSelected ? 'border-cyan-600' : 'border-[#2A2A2A]'} 
        
        bg-[#1C1C1C] text-white cursor-pointer`}
    >
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
          alt={`${skip.size} Yard Skip`}
          width={800}
          height={192}
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />
        {skip.allows_heavy_waste && (
          <div className="absolute bottom-3 right-2 z-20 bg-amber-800 text-white px-3 py-1 
            rounded-full text-sm font-medium shadow-md">
            Heavy Waste Ok
          </div>
        )}
        {skip.allowed_on_road && (
          <div className="absolute bottom-3 right-2 z-20 bg-cyan-700 text-white px-3 py-1 
            rounded-full text-sm font-medium shadow-md">
            Allowed On Road
          </div>
        )}
      </div>

      <div className="p-4 md:p-6">
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
            <span className="text-sm text-gray-300 ml-2">/ week + VAT</span>
          </div>
        </div>
        <button
          className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all 
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
  );
}