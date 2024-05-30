"use client";

import { useState } from "react";
import { OrderData } from "@/types";
import {
  DiagnosticInfoComponent,
  IntakeInfoComponent,
  OrderInfoButton,
  PatientHistoryInfoComponent,
} from "../molecules";
import { InfoItem, SelfCareTips } from "../atoms";

interface CareNavigatorViewContentProps {
  orderData: OrderData;
}

export const CareNavigatorViewContent = ({
  orderData,
}: CareNavigatorViewContentProps) => {
  const [showDiagnostic, setShowDiagnostic] = useState(false);
  const [showSelfCareTips, setShowSelfCareTips] = useState(false);
  const [showIntake, setShowIntake] = useState(false);
  const [showPatientHistory, setShowPatientHistory] = useState(false);

  const { miraOSsummary, diagnostic, selfCareTips, visitIntake } = orderData;

  return (
    <>
      <InfoItem
        title="Chief Complaint"
        content={miraOSsummary.chiefComplaint}
      />
      <InfoItem
        title="Condition Category"
        content={miraOSsummary.conditionCategory}
      />
      <InfoItem title="Triage Level" content={miraOSsummary.triageLevel[0]} />
      <InfoItem
        title="Mira Care Options"
        content="Virtual Primary Care: A virtual consultation can help confirm the diagnosis and provide additional care instructions."
      />

      <div className="border-b border-gray-200" />

      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-4 justify-evenly">
          <OrderInfoButton
            label="Diagnostic"
            isActive={showDiagnostic}
            onClick={() => setShowDiagnostic(!showDiagnostic)}
          />
          <OrderInfoButton
            label="Self-Care Tips"
            isActive={showSelfCareTips}
            onClick={() => setShowSelfCareTips(!showSelfCareTips)}
          />
          <OrderInfoButton
            label="Intake"
            isActive={showIntake}
            onClick={() => setShowIntake(!showIntake)}
          />
          <OrderInfoButton
            label="Patient History"
            isActive={showPatientHistory}
            onClick={() => setShowPatientHistory(!showPatientHistory)}
          />
        </div>

        {showDiagnostic && <DiagnosticInfoComponent diagnostic={diagnostic} />}
        {showSelfCareTips && <SelfCareTips selfCaretips={selfCareTips} />}
        {showIntake && <IntakeInfoComponent visitIntake={visitIntake} />}
        {showPatientHistory && <PatientHistoryInfoComponent />}

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
