// ProgramCard2.tsx - Updated version
'use client'
import React, { useMemo, useState } from 'react';
import { AnimatedButton } from '../ui/Button';



const ProgramCard2 = () => {
  return (
    <div>
      <div className="bg-[#ffffff4d] p-4 flex-1 border border-white rounded-2xl backdrop-blur-3xl overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-inter text-xl font-semibold">
            Next in This Program
          </h2>
          <AnimatedButton
            style={{
              borderRadius: "100px",
              background:
                "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
            }}
            className="text-white font-semibold px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
          >
            View All
          </AnimatedButton>
        </div>

        <div className="mt-4">
          
        </div>
      </div>
    </div>
  );
};

export default ProgramCard2;