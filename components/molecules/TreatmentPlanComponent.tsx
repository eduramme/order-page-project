export const TreatmentPlanComponent = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Treatment Plan</h3>
        <div className="flex flex-col w-full gap-2">
          <div className="flex items-center gap-2">
            <p>
              <strong>Provider Name:</strong> Ozita Cooper, MD
            </p>
            <button className="text-blue-500">(Edit)</button>
          </div>

          <div className="flex flex-col gap-2">
            <textarea className="border border-gray-300 rounded-md px-4 py-2" />
            <textarea className="border border-gray-300 rounded-md px-4 py-2" />
            <textarea className="border border-gray-300 rounded-md px-4 py-2" />
          </div>
        </div>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 hover:opacity-80 transition-opacity duration-300 rounded-md">
          Finish
        </button>
      </div>
    </>
  );
};
