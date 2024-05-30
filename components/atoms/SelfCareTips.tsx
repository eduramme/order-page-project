interface SelfCareTipsProps {
  selfCaretips: string;
}

export const SelfCareTips = ({ selfCaretips }: SelfCareTipsProps) => {
  return (
    <div>
      <p>{selfCaretips}</p>
    </div>
  );
};
