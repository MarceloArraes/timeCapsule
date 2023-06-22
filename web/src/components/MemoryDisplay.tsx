import React from "react";

const MemoryDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center  p-16">
      <p className="w-[360px] text-center leading-relaxed">
        You didn&apos;t register any memory. {" \n"}
        <a href="" className="underline hover:text-gray-500">
          create it now
        </a>
      </p>
    </div>
  );
};

export default MemoryDisplay;
