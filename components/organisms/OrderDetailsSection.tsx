const OrderDetailsSection = () => {
  return (
    <div className="w-full rounded-[8px] overflow-hidden border border-gray-300">
      <div className="p-4 flex border-b border-gray-300 bg-gray-50">
        <h3 className="text-lg font-bold">Order Details</h3>
      </div>
      <div className="p-4 grid grid-cols-2">
        <div className="w-full flex flex-col gap-2">
          <p>
            <strong>Status:</strong> Reviewing (Edit)
          </p>
          <p>
            <strong>Member:</strong> ryan.bruns
          </p>
          <p>
            <strong>Date of Birth:</strong> 01/01/1980
          </p>
          <p>
            <strong>Request Address:</strong> 98 St Marks Pl, New York, NY
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p>
            <strong>Received:</strong> 01/11/2022
          </p>
          <p>
            <strong>Intended Date:</strong> 01/12/2022 (Edit)
          </p>
          <p>
            <strong>Requested Time of Day:</strong> Morning (Edit)
          </p>
          <p>
            <strong>Assigned Agent:</strong> Ryan Bruns
          </p>
          <p>
            <strong>Time Zone:</strong> EDT
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsSection;
