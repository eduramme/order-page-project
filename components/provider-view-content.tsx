"use client";

import { useState } from "react";
import PatientHistory from "./patient-history-tab";
import IntakeTab from "./intake-tab";

const ProviderViewContent = () => {
  const [isIntakeTabOpen, setIsIntakeTabOpen] = useState(false);
  const [isPatientHistory, setIsPatientHistory] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">Chief Complaint</h3>
        <p>Runny nose, sore throat, and mild fever</p>
      </div>

      <div className="border-b border-gray-200" />

      <div className="text-lg font-bold">Mira AI</div>

      <p>
        <strong>Diagnosis:</strong> Common Cold
      </p>
      <p>
        <strong>Probability:</strong> 90%
      </p>
      <p>
        <strong>ICD10CM Code:</strong> J00
      </p>
      <p>
        <strong>Explanation:</strong> Symptoms are consistent with a viral upper
        respiratory infection...
      </p>
      <div>
        <strong>Recommended Rx:</strong>
        <ul>
          <li>Acetaminophen: 500 mg</li>
          <li>Diphenhydramine: 25 mg</li>
          <li>Guaifenesin: 200-400 mg</li>
        </ul>
      </div>

      <p>
        <strong>Reasons for Dx:</strong> Detailed reason for each recommendation
      </p>

      <div className="border-b border-gray-200" />

      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-4 justify-evenly">
          <button
            onClick={() => {
              setIsIntakeTabOpen(!isIntakeTabOpen);
            }}
            className="flex hover:bg-gray-50 transition-colors duration-200 p-4 items-center justify-center w-full rounded-md border border-black"
          >
            Intake
          </button>
          <button
            onClick={() => {
              setIsPatientHistory(!isPatientHistory);
            }}
            className="flex hover:bg-gray-50 transition-colors duration-200 p-4 items-center justify-center w-full rounded-md border border-black"
          >
            Patient History
          </button>
        </div>

        {isIntakeTabOpen && <IntakeTab />}
        {isPatientHistory && <PatientHistory />}

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Treatment Plan</h3>
          <div className="flex flex-col w-full gap-2">
            <p>
              <strong>Provider Name:</strong> Ozita Cooper, MD
            </p>
            <div className="flex flex-col gap-2">
              <textarea className="border border-gray-300 rounded-md px-4 py-2" />
              <textarea className="border border-gray-300 rounded-md px-4 py-2" />
              <textarea className="border border-gray-300 rounded-md px-4 py-2" />
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 hover:opacity-80 transition-opacity duration-300 rounded-md">
            Finish
          </button>
        </div>
      </div>
    </>
  );
};

export default ProviderViewContent;
