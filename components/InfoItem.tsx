interface InfoItemProps {
  title: string;
  content: string;
}

export const InfoItem = ({ title, content }: InfoItemProps) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-lg font-bold">{title}</h3>
    <p>{content}</p>
  </div>
);
