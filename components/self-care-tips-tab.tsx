interface SelfCareTipsProps {
  selfCaretips: string;
}

const SelfCareTips = ({ selfCaretips }: SelfCareTipsProps) => {
  return (
    <div>
      <p>{selfCaretips}</p>
    </div>
  );
};

export default SelfCareTips;
