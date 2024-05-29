import { OrderData } from "@/types";

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

const returnData = () => {
  return jsonResponse;
};