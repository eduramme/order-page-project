import { DiagnosticData } from "@/types";

interface DiagnosticInfoComponentProps {
  diagnostic: DiagnosticData[];
}

const DiagnosticInfoComponent = ({
  diagnostic,
}: DiagnosticInfoComponentProps) => {
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

export default DiagnosticInfoComponent;
