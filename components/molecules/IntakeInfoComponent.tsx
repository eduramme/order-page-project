"use client";

import { VisitIntakeItemData } from "@/types";

interface IntakeInfoComponentProps {
  visitIntake: VisitIntakeItemData[];
}

export const IntakeInfoComponent = ({
  visitIntake,
}: IntakeInfoComponentProps) => {
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
