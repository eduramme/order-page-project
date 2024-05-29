"use client";

import { VisitIntakeItem } from "@/types";

interface IntakeTabProps {
  visitIntake: VisitIntakeItem[];
}

const IntakeTab = ({ visitIntake }: IntakeTabProps) => {
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

export default IntakeTab;
