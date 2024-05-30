import { DiagnosticData } from "@/types";

interface DiagnosticProps {
  diagnostic: DiagnosticData[];
}

const Diagnostic = ({ diagnostic }: DiagnosticProps) => {
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

export default Diagnostic;
