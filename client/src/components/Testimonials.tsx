import React from "react";
import Title from "./Title";
import { BookUserIcon } from "lucide-react";

const Testimonials = () => {
  return (
    <div
      id="features"
      className="mx-auto flex flex-col justify-center items-center"
    >
      <div className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 border rounded-full px-4 mx-auto py-1">
        <BookUserIcon size={20} />
        <span>Testimonials</span>
      </div>
      <Title
        title="Don't just take our words"
        description="Here what our users says about us. We are always looking for ways to improve. If you have any suggestions, please feel free to contact us."
      />
    </div>
  );
};

export default Testimonials;
