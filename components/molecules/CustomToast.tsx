import React from "react";
import { toast } from "react-hot-toast";

interface CustomToastProps {
  toastId: string;
}

export const CustomToast = ({ toastId }: CustomToastProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex flex-col">
        <p>Care options: </p>
        <p className="text-gray-500">
          In-person clinic, virtual care, labs, navigation.
        </p>
      </div>

      <div>
        <button
          className="flex items-center justify-center text-white px-4 py-2 bg-blue-500 rounded-md"
          onClick={() => toast.dismiss(toastId)}
        >
          Close
        </button>
      </div>
    </div>
  );
};
