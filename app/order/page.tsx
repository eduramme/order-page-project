"use client";

import OrderDetails from "@/components/organisms/OrderDetails";
import OrderSection from "@/components/organisms/OrderSection";

const OrderPage = () => {
  return (
    <div className="flex flex-col gap-4 p-5 max-w-[1216px] mx-auto">
      <OrderDetails />
      <OrderSection />
    </div>
  );
};

export default OrderPage;
