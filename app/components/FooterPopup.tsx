// /components/FooterPopup.tsx
'use client';

import { Skip } from '../types';

interface FooterPopupProps {
  selectedSkip: Skip | null;
  setSelectedSkip: (skip: Skip | null) => void;
}

export default function FooterPopup({ selectedSkip, setSelectedSkip }: FooterPopupProps) {
  const handleClose = () => {
    setSelectedSkip(null);
  };

  const handleConfirm = () => {
    alert(`You have selected a ${selectedSkip?.size} Yard Skip for £${selectedSkip?.price_before_vat} / week + VAT.`);
    setSelectedSkip(null); // Clear the selection
  };

  if (!selectedSkip) return null;

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] text-white p-4 transition-all duration-300 translate-y-0"
    >
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-lg font-bold">{selectedSkip.size} Yard Skip</h3>
            <p className="text-sm text-gray-300">
              £{selectedSkip.price_before_vat} / week + VAT
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleClose}
            className="py-2 px-4 rounded-md bg-gray-600 hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="py-2 px-4 rounded-md bg-cyan-600 hover:bg-cyan-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </footer>
  );
}