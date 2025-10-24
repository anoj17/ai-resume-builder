import React from "react";

const GoogleAuth = ({ label }: { label: string }) => {
  return (
    <div>
      <button
        type="button"
        className="w-full flex items-center gap-2 cursor-pointer justify-center mb-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
      >
        <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
          alt="googleFavicon"
        />
        {label}
      </button>
    </div>
  );
};

export default GoogleAuth;
