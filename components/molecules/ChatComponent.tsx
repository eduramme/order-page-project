export const ChatComponent = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="px-4 py-2 bg-blue-50 rounded-md">
        Patient: I have been feeling unwell for the past few days.
      </div>
      <div className="px-4 py-2 bg-gray-50 rounded-md">
        Care Navigator: Can you describe your symptoms?
      </div>
      <div className="px-4 py-2 bg-blue-50 rounded-md">
        Patient: I have a runny nose, sore throat, and mild fever.
      </div>
      <div className="flex gap-2 flex-col sm:flex-row">
        <input
          className="flex-grow border-gray-200 border py-2 px-4 rounded-md"
          type="text"
        />
        <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-300">
          Send Message
        </button>
      </div>
    </div>
  );
};
