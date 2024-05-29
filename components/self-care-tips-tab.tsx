interface SelfCareTipsProps {
  selfCaretips: string;
}

const SelfCareTips = ({ selfCaretips }: SelfCareTipsProps) => {
  return (
    <div>
      <p>
        Rest, drink plenty of fluids, and use a humidifier. Gargle with salt
        water for a sore throat.
      </p>
      <p>{selfCaretips}</p>
    </div>
  );
};

export default SelfCareTips;
