"use client";

import { OrderData } from "@/types";
import { useState, useEffect } from "react";

const OrderPage = () => {
  const [data, setData] = useState<OrderData | null>(null);

  useEffect(() => {
    // Simulate fetching data from backend
    const fetchData = async () => {
      const jsonResponse: OrderData = {
        summary:
          "Based on your symptoms of a sore throat, fever, and swollen lymph nodes, you likely have pharyngitis...",
        diagnostic: [
          { name: "Rapid strep test", code: "87880" },
          { name: "Throat culture", code: "87070" },
        ],
        selfCareTips: "Rest, drink plenty of fluids...",
        OTC: [
          {
            name: "Ibuprofen",
            type: "NSAID",
            dose: "200-400 mg",
            frequency: "every 4-6 hours as needed",
          },
          {
            name: "Acetaminophen",
            type: "Analgesic",
            dose: "500 mg",
            frequency: "every 4-6 hours as needed",
          },
          {
            name: "Throat lozenges",
            type: "Local anesthetic",
            dose: "as needed",
            frequency: "as needed",
          },
        ],
        miraCareOptions: [
          {
            careType: ["virtual_primary_care"],
            active: ["true"],
            description: "Set member expectations",
          },
        ],
        miraOSsummary: {
          triageLevel: ["non-emergent"],
          chiefComplaint: "Sore throat, fever, swollen lymph nodes",
          dx: [
            {
              diagnosis: "Pharyngitis",
              probability: "high",
              ICD10CMCode: "J02.9",
            },
          ],
          reasonsForDx:
            "Symptoms of sore throat, fever, and swollen lymph nodes are indicative of pharyngitis...",
          conditionCategory: "Infectious disease",
          rxRecommendation: [
            {
              name: "Amoxicillin",
              type: "Antibiotic",
              dose: "500 mg",
              instruction: "Take every 8 hours for 10 days",
            },
          ],
          rxExplanation:
            "Amoxicillin is recommended for bacterial pharyngitis according to the latest clinical guidelines.",
        },
        visitIntake: [
          { request: "symptoms" },
          {
            title: "Symptoms",
            value: "Sore throat, fever, swollen lymph nodes",
          },
          { title: "Duration", value: "3 days" },
          { title: "Past Medical History", value: "None" },
          { title: "Current Medications", value: "None" },
          { title: "Medication Allergies", value: "None" },
          { title: "Weight", value: "70 kg" },
          { title: "Height", value: "170 cm" },
          { title: "BMI", value: "24.2" },
          { title: "Smoking Status", value: "Non-smoker" },
          { title: "Drinking Status", value: "Occasional" },
        ],
      };

      setData(jsonResponse);
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Order Details</h1>
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <h2>Status: Reviewing (Edit)</h2>
        <p>Member: ryan.bruns</p>
        <p>Date of Birth: 01/01/1980</p>
        <p>Request Address: 98 St Marks Pl, New York, NY</p>
        <p>Received: 01/11/2022</p>
        <p>Intended Date: 01/12/2022 (Edit)</p>
        <p>Requested Time of Day: Morning (Edit)</p>
        <p>Assigned Agent: Ryan Bruns</p>
        <p>Time Zone: EDT</p>
      </div>

      <h2>Care Navigator View</h2>
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <p>
          <strong>Chief Complaint:</strong> {data.miraOSsummary.chiefComplaint}
        </p>
        <p>
          <strong>Condition Category:</strong>{" "}
          {data.miraOSsummary.conditionCategory}
        </p>
        <p>
          <strong>Triage Level:</strong>{" "}
          {data.miraOSsummary.triageLevel.join(", ")}
        </p>
        <p>
          <strong>Mira Care Options:</strong>{" "}
          {data.miraCareOptions[0].description}
        </p>
      </div>

      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <button>Diagnostic</button>
        <button>Self-Care Tips</button>
        <button>Intake</button>
        <button>Patient History</button>
        <div>
          <h3>Diagnostic</h3>
          {data.diagnostic.length > 0 ? (
            <ul>
              {data.diagnostic.map((item, index) => (
                <li key={index}>
                  {item.name} (Code: {item.code})
                </li>
              ))}
            </ul>
          ) : (
            <p>No diagnostic information available.</p>
          )}
          <h3>Self-Care Tips</h3>
          <p>{data.selfCareTips}</p>
          <h3>Intake</h3>
          <ul>
            {data.visitIntake.map((item, index) => (
              <li key={index}>
                {item.title ? `${item.title}: ${item.value}` : item.request}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <h3>Visit Intake</h3>
        <ul>
          {data.visitIntake.map((item, index) => (
            <li key={index}>
              {item.title ? `${item.title}: ${item.value}` : item.request}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <button>Send Care Options</button>
        <button>Cancel Order</button>
      </div>

      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <p>
          <strong>Patient:</strong> I have been feeling unwell for the past few
          days.
        </p>
        <p>
          <strong>Care Navigator:</strong> Can you describe your symptoms?
        </p>
        <p>
          <strong>Patient:</strong> I have a runny nose, sore throat, and mild
          fever.
        </p>
        <input type="text" placeholder="Type a message..." />
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default OrderPage;
