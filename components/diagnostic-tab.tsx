import { Diagnostic } from "@/types";

interface DiagnosticTabProps {
  diagnostic: Diagnostic[];
}

const DiagnosticTab = ({ diagnostic }: DiagnosticTabProps) => {
  if (!diagnostic)
    return (
      <div>
        <p>No diagnostic information available.</p>
      </div>
    );

  return (
    <div>
      {diagnostic.map((item) => {
        return <p key={item.code}>{item.name}</p>;
      })}
    </div>
  );
};

export default DiagnosticTab;
