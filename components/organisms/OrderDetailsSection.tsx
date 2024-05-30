export const OrderDetailsSection = () => {
  return (
    <div className="w-full rounded-[8px] overflow-hidden border border-gray-300">
      <div className="p-4 flex border-b border-gray-300 bg-gray-50">
        <h3 className="text-lg font-bold">Order Details</h3>
      </div>
      <div className="p-4 grid md:grid-cols-2 grid-cols-1">
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p>
              <strong>Status:</strong> Reviewing
            </p>
            <button className="text-blue-500">(Edit)</button>
          </div>

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
          <div className="flex items-center gap-2">
            <p>
              <strong>Intended Date:</strong> 01/12/2022
            </p>
            <button className="text-blue-500">(Edit)</button>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <strong>Requested Time of Day:</strong> Morning
            </p>
            <button className="text-blue-500">(Edit)</button>
          </div>

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
