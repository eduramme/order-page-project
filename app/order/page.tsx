"use client";

import OrderDetailsSection from "@/components/organisms/OrderDetailsSection";
import OrderSection from "@/components/organisms/OrderSection";

const OrderPage = () => {
  return (
    <div className="flex flex-col gap-4 p-5 max-w-[1216px] mx-auto">
      <OrderDetailsSection />
      <OrderSection />
    </div>
  );
};

export default OrderPage;
