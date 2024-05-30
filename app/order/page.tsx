"use client";

import { OrderDetailsSection, OrderSection } from "@/components/organisms";
import { Toaster } from "react-hot-toast";

const OrderPage = () => {
  return (
    <div className="flex flex-col gap-4 p-5 max-w-[1216px] mx-auto">
      <OrderDetailsSection />
      <OrderSection />
      <Toaster />
    </div>
  );
};

export default OrderPage;
