"use client";

import CareNavigatorView from "@/components/care-navigator-view";
import OrderDetails from "@/components/order-details";

const OrderPage = () => {
  return (
    <div className="flex flex-col gap-4 p-5 max-w-[1216px] mx-auto">
      <OrderDetails />
      <CareNavigatorView />
    </div>
  );
};

export default OrderPage;
