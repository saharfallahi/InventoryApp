import React from "react";

function Navbar() {
  return (
    <div className="h-12 bg-slate-700 flex items-center justify-center gap-x-4 mb-6">
      <h1 className="text-lg md:text-xl font-bold text-slate-300">
        Inventory App
      </h1>
      <span className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-500 border-2 border-slate-300 text-slate-300 font-bold ">
        1
      </span>
    </div>
  );
}

export default Navbar;
