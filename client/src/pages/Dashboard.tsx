import {
  FilePenIcon,
  FilePenLine,
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloudIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";

const Dashboard = () => {
  const colors = ["#9333ea", "#d97706", "#dc2626", "0284c7", "16a34a"];
  const [allResumes, setAllResumes] = useState<any[]>([]);

  const loadResumes = async () => {
    setAllResumes(dummyResumeData);
  };

  useEffect(() => {
    loadResumes();
  }, []);
  return (
    <div className="pt-10 pl-36">
      <div className="mx-auto">
        <p className="bg-gradient-to-r from-slate-600 to-slate-700 font-medium text-2xl bg-clip-text text-transparent mb-6">
          Welcome, Anoj Budathoki
        </p>
        <div className="flex gap-5">
          <button className="border border-dashed w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 rounded-full text-white bg-gradient-to-br from-indigo-300 to-indigo-500" />
            <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
              Create Resume
            </p>
          </button>
          <button className="border border-dashed w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 rounded-full text-white bg-gradient-to-br from-purple-300 to-purple-500" />
            <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
              Create Resume
            </p>
          </button>
        </div>
      </div>
      <hr className="border-slate-300 max-w-[305px] my-7" />

      <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
        {allResumes.map((resume, index) => {
          const baseColr = colors[index % colors.length];
          return (
            <button
              key={index}
              className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${baseColr}10, ${baseColr}40)`,
                borderColor: baseColr + "40",
              }}
            >
              <FilePenLineIcon
                className="size-7 group-hover:scale-105 transition-all"
                style={{ color: baseColr }}
              />
              <p
                className="text-sm group-hover:scale-105 transition-all px-2 text-center"
                style={{ color: baseColr }}
              >
                {resume.title}
              </p>
              <p
                className="absolute bottom-1 text-[11px] text-slate-400 text-center group-hover:text-slate-500 transition-all duration-300 px-2"
                style={{ color: baseColr + "90" }}
              >
                Updated On{new Date(resume.updatedAt).toLocaleDateString()}
              </p>
              <div className="group-hover:flex hidden absolute top-1 right-1 items-center">
                <TrashIcon className="size-7 text-slate-700 hover:bg-white/50 p-1.5 transition-colors" />
                <PencilIcon className="size-7 text-slate-700 hover:bg-white/50 p-1.5 transition-colors" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
