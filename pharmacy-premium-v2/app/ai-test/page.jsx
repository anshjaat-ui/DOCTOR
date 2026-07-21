"use client";
import { useState } from "react";

export default function AITest() {
  const [step, setStep] = useState(0);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-xl font-bold">AI Health Test</h1>

      {step === 0 && (
        <>
          <p className="mt-4">Select your concern:</p>
          <button onClick={() => setStep(1)} className="mr-2 mt-2 bg-green-600 text-white px-4 py-2 rounded">
            Kidney
          </button>
          <button onClick={() => setStep(1)} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
            Hair
          </button>
        </>
      )}

      {step === 1 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Recommended:</h3>
          <p>Stone Remover Kit</p>
        </div>
      )}
    </div>
  );
}