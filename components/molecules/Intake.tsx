"use client";

import { VisitIntakeItemData } from "@/types";

interface IntakeProps {
  visitIntake: VisitIntakeItemData[];
}

const Intake = ({ visitIntake }: IntakeProps) => {
  return (
    <div className="flex flex-col">
      {visitIntake.map((intake) => {
        return (
          intake.title && (
            <p key={intake.title}>
              {intake.title}: {intake.value}
            </p>
          )
        );
      })}
    </div>
  );
};

export default Intake;
