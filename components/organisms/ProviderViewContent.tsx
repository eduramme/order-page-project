"use client";

import { useState } from "react";
import { OrderData } from "@/types";
import { InfoItem } from "../atoms";
import {
  IntakeInfoComponent,
  OrderInfoButton,
  PatientHistoryInfoComponent,
} from "../molecules";

interface ProviderViewContentProps {
  orderData: OrderData;
}

export const ProviderViewContent = ({
  orderData,
}: ProviderViewContentProps) => {
  const [isIntakeTabOpen, setIsIntakeTabOpen] = useState(false);
  const [isPatientHistoryOpen, setIsPatientHistoryOpen] = useState(false);

  const { miraOSsummary, visitIntake } = orderData;

  return (
    <>
      <InfoItem
        title="Chief Complaint"
        content={miraOSsummary.chiefComplaint}
      />

      <div className="border-b border-gray-200" />

      <div className="text-lg font-bold">Mira AI</div>

      {miraOSsummary.dx.map((item, index) => (
        <div key={index}>
          <p>
            <strong>Diagnosis:</strong> {item.diagnosis}
          </p>
          <p>
            <strong>Probability:</strong> {item.probability}
          </p>
          <p>
            <strong>ICD10CM Code:</strong> {item.ICD10CMCode}
          </p>
        </div>
      ))}

      <p>
        <strong>Explanation:</strong> {miraOSsummary.reasonsForDx}
      </p>
      <div>
        <strong>Recommended Rx:</strong>
        <ul className="list-disc pt-2 pl-8">
          {miraOSsummary.rxRecommendation.map((item) => (
            <li key={item.name}>
              {item.name}: {item.dose}
            </li>
          ))}
        </ul>
      </div>

      <p>
        <strong>Reasons for Dx: </strong>
        {miraOSsummary.rxExplanation}
      </p>

      <div className="border-b border-gray-200" />

      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col md:flex-row gap-4 justify-evenly">
          <OrderInfoButton
            label="Intake"
            isActive={isIntakeTabOpen}
            onClick={() => setIsIntakeTabOpen(!isIntakeTabOpen)}
          />
          <OrderInfoButton
            label="Patient History"
            isActive={isPatientHistoryOpen}
            onClick={() => setIsPatientHistoryOpen(!isPatientHistoryOpen)}
          />
        </div>

        {isIntakeTabOpen && <IntakeInfoComponent visitIntake={visitIntake} />}
        {isPatientHistoryOpen && <PatientHistoryInfoComponent />}

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
