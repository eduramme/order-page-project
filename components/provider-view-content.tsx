"use client";

import { useState } from "react";
import PatientHistory from "./patient-history-tab";
import IntakeTab from "./intake-tab";
import { OrderData } from "@/types";

interface ProviderViewContentProps {
  orderData: OrderData;
}

const ProviderViewContent = ({ orderData }: ProviderViewContentProps) => {
  const [isIntakeTabOpen, setIsIntakeTabOpen] = useState(false);
  const [isPatientHistory, setIsPatientHistory] = useState(false);

  const { miraOSsummary, visitIntake } = orderData;

  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">Chief Complaint</h3>
        <p>{miraOSsummary.chiefComplaint}</p>
      </div>

      <div className="border-b border-gray-200" />

      <div className="text-lg font-bold">Mira AI</div>

      {miraOSsummary.dx.map((item) => {
        return (
          <>
            <p>
              <strong>Diagnosis:</strong> {item.diagnosis}
            </p>
            <p>
              <strong>Probability:</strong> {item.probability}
            </p>
            <p>
              <strong>ICD10CM Code:</strong> {item.ICD10CMCode}
            </p>
          </>
        );
      })}

      <p>
        <strong>Explanation:</strong> {miraOSsummary.reasonsForDx}
      </p>
      <div>
        <strong>Recommended Rx:</strong>
        <ul>
          {miraOSsummary.rxRecommendation.map((item) => {
            return (
              <li key={item.name}>
                {item.name}: {item.dose}
              </li>
            );
          })}
        </ul>
      </div>

      <p>
        <strong>Reasons for Dx: </strong>
        {miraOSsummary.rxExplanation}
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

        {isIntakeTabOpen && <IntakeTab visitIntake={visitIntake} />}
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
