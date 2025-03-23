// /components/ProgressBar.tsx
'use client';

import { useRouter } from 'next/navigation';

interface ProgressBarProps {
  currentStep: number;
}

const steps = [
  { label: 'Select Skip', path: '/select-skip' },
];

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#1C1C1C] p-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep > index ? 'bg-cyan-600 text-white' : 'bg-gray-600 text-white'
                } cursor-pointer`}
                onClick={() => router.push(step.path)}
              >
                {index + 1}
              </div>
              <span
                className={`ml-2 font-bold ${
                  currentStep > index ? 'text-white' : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}