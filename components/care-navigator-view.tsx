"use client";

import { useState } from "react";
import DiagnosticTab from "./diagnostic-tab";
import IntakeTab from "./intake-tab";
import PatientHistory from "./patient-history-tab";
import SelfCareTips from "./self-care-tips-tab";

const CareNavigatorView = () => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isSelfCareTipsOpen, setIsSelfCareTipsOpen] = useState(false);
  const [isIntakeTabOpen, setIsIntakeTabOpen] = useState(false);
  const [isPatientHistory, setIsPatientHistory] = useState(false);

  return (
    <div className="w-full rounded-[8px] overflow-hidden border border-gray-300">
      <div className="p-4 flex border-b border-gray-300 bg-gray-50">
        <h3 className="text-lg font-bold">Care Navigator View</h3>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Chief Complaint</h3>
          <p>Runny nose, sore throat, and mild fever</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Condition Category</h3>
          <p>Respiratory</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Triage Level</h3>
          <p>Self-care</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Mira Care Options</h3>
          <p>
            Virtual Primary Care: A virtual consultation can help confirm the
            diagnosis and provide additional care instructions.
          </p>
        </div>

        <div className="border-b border-gray-200" />

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex gap-4 justify-evenly">
            <button
              onClick={() => {
                setIsDiagnosticOpen(!isDiagnosticOpen);
              }}
              className="flex hover:bg-gray-50 transition-colors duration-200 p-4 items-center justify-center w-full rounded-md border border-black"
            >
              Diagnostic
            </button>
            <button
              onClick={() => {
                setIsSelfCareTipsOpen(!isSelfCareTipsOpen);
              }}
              className="flex hover:bg-gray-50 transition-colors duration-200 p-4 items-center justify-center w-full rounded-md border border-black"
            >
              Self-Care Tips
            </button>
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
          {isDiagnosticOpen && <DiagnosticTab />}
          {isSelfCareTipsOpen && <SelfCareTips />}
          {isIntakeTabOpen && <IntakeTab />}
          {isPatientHistory && <PatientHistory />}

          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-4 py-2 hover:opacity-80 transition-opacity duration-300 rounded-md">
              Send Care Options
            </button>
            <button className="bg-red-500 text-white px-4 py-2 hover:opacity-80 transition-opacity duration-300 rounded-md">
              Cancel Order
            </button>
          </div>

          <div className="border-b border-gray-200" />

          <div className="flex flex-col w-full gap-2">
            <div className="px-4 py-2 bg-blue-50 rounded-md">
              Patient: I have been feeling unwell for the past few days.
            </div>
            <div className="px-4 py-2 bg-gray-50 rounded-md">
              Care Navigator: Can you describe your symptoms?
            </div>
            <div className="px-4 py-2 bg-blue-50 rounded-md">
              Patient: I have a runny nose, sore throat, and mild fever.
            </div>
            <div className="flex gap-2">
              <input
                className="flex-grow border-gray-200 border py-2 px-4 rounded-md"
                type="text"
              />
              <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareNavigatorView;
