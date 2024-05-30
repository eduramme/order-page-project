interface OrderInfoButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const OrderInfoButton = ({
  label,
  isActive,
  onClick,
}: OrderInfoButtonProps) => (
  <button
    onClick={onClick}
    className={`flex font-bold text-lg hover:bg-gray-50 transition-colors duration-200 px-4 py-2 items-center justify-center w-full rounded-md border ${
      isActive ? "border-blue-500 text-blue-500" : "border-black"
    }`}
  >
    {label}
  </button>
);
