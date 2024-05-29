"use client";

const OrderDetails = () => {
  return (
    <div className="w-full rounded-[8px] overflow-hidden border border-gray-300">
      <div className="p-4 flex border-b border-gray-300 bg-gray-50">
        <h3 className="text-lg font-bold">Order Details</h3>
      </div>
      <div className="p-4">
        <h2>Status: Reviewing (Edit)</h2>
        <p>Member: ryan.bruns</p>
        <p>Date of Birth: 01/01/1980</p>
        <p>Request Address: 98 St Marks Pl, New York, NY</p>
        <p>Received: 01/11/2022</p>
        <p>Intended Date: 01/12/2022 (Edit)</p>
        <p>Requested Time of Day: Morning (Edit)</p>
        <p>Assigned Agent: Ryan Bruns</p>
        <p>Time Zone: EDT</p>
      </div>
    </div>
  );
};

export default OrderDetails;
