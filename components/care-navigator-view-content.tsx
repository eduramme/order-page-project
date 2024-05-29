"use client";

import { useState } from "react";
import DiagnosticTab from "./diagnostic-tab";
import PatientHistory from "./patient-history-tab";
import SelfCareTips from "./self-care-tips-tab";
import IntakeTab from "./intake-tab";
import { OrderData } from "@/types";

interface CareNavigatorViewContentProps {
  orderData: OrderData;
}

const CareNavigatorViewContent = ({
  orderData,
}: CareNavigatorViewContentProps) => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isSelfCareTipsOpen, setIsSelfCareTipsOpen] = useState(false);
  const [isIntakeTabOpen, setIsIntakeTabOpen] = useState(false);
  const [isPatientHistory, setIsPatientHistory] = useState(false);

  const { miraOSsummary, diagnostic, selfCareTips, visitIntake } = orderData;

  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">Chief Complaint</h3>
        <p>{miraOSsummary.chiefComplaint}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">Condition Category</h3>
        <p>{miraOSsummary.conditionCategory}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">Triage Level</h3>
        <p>{miraOSsummary.triageLevel}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">Mira Care Options</h3>
        <p>
          Virtual Primary Care: A virtual consultation can help confirm the
          diagnosis and provide additional care instructions. - Change that
        </p>
        {/* <p>{miraOSsummary.}</p> */}
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

        {isDiagnosticOpen && <DiagnosticTab diagnostic={diagnostic} />}
        {isSelfCareTipsOpen && <SelfCareTips selfCaretips={selfCareTips} />}
        {isIntakeTabOpen && <IntakeTab visitIntake={visitIntake} />}
        {isPatientHistory && <PatientHistory />}

        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 hover:opacity-80 transition-opacity duration-300 rounded-md">
            Send Care Options
          </button>
          <button className="bg-red-500 text-white px-4 py-2 hover:opacity-80 transition-opacity duration-300 rounded-md">
            Cancel Order
          </button>
        </div>
      </div>
    </>
  );
};

export default CareNavigatorViewContent;
