"use client";

import OrderSection from "@/components/order-section";
import OrderDetails from "@/components/order-details";

const OrderPage = () => {
  return (
    <div className="flex flex-col gap-4 p-5 max-w-[1216px] mx-auto">
      <OrderDetails />
      <OrderSection />
    </div>
  );
};

export default OrderPage;
