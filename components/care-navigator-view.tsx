"use client";

import { useState } from "react";
import ChatComponent from "./chat-component";
import CareNavigatorViewContent from "./care-navigator-view-content";
import ProviderViewContent from "./provider-view-content";

enum ViewType {
  CareNavigator,
  Provider,
}

const CareNavigatorView = () => {
  const [viewType, setViewType] = useState(ViewType.CareNavigator);

  const handleSwitchView = () => {
    if (viewType === ViewType.CareNavigator) {
      setViewType(ViewType.Provider);
    } else {
      setViewType(ViewType.CareNavigator);
    }
  };

  return (
    <div className="w-full rounded-[8px] overflow-hidden border border-gray-300">
      <div className="p-4 flex border-b border-gray-300 bg-gray-50 items-center justify-between">
        <h3 className="text-lg font-bold">
          {viewType === ViewType.CareNavigator
            ? "Care Navigator View"
            : "Provider View"}
        </h3>
        <button
          onClick={handleSwitchView}
          className="px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 transition-colors duration-300 rounded-md"
        >
          Switch to{" "}
          {viewType === ViewType.CareNavigator ? "provider" : "care navigator"}{" "}
          view
        </button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        {viewType === ViewType.CareNavigator ? (
          <CareNavigatorViewContent />
        ) : (
          <ProviderViewContent />
        )}

        <div className="border-b border-gray-200" />

        <ChatComponent />
      </div>
    </div>
  );
};

export default CareNavigatorView;
