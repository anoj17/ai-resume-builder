import React from "react";

interface titleProps {
  title: string;
  description: string;
}

const Title = ({ title, description }: titleProps) => {
  return (
    <div className="text-slate-700 pt-6 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
      <p className="max-w-2xl text-slate-500 mt-4">{description}</p>
    </div>
  );
};

export default Title;
