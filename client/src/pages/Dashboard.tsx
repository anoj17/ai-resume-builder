import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const colors = ["#9333ea", "#d97706", "#dc2626", "0284c7", "16a34a"];
  const [allResumes, setAllResumes] = useState<any[]>([]);
  const [showCreateResume, setShowCreateResume] = useState<boolean>(false);
  const [showEditResume, setShowEditResume] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const navigate = useNavigate();

  const loadResumes = async () => {
    setAllResumes(dummyResumeData);
  };

  const createResume = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowCreateResume(false);
    navigate("/app/builder/123");
    console.log("helloooo", title);
  };

  useEffect(() => {
    loadResumes();
  }, []);
  return (
    <div className="pt-10 p-5 md:pl-16 lg:pl-36">
      <div className="mx-auto">
        <p className="bg-gradient-to-r from-slate-600 to-slate-700 font-medium text-2xl bg-clip-text text-transparent mb-6">
          Welcome, Anoj Budathoki
        </p>
        <div className="flex gap-5">
          <button
            className="border border-dashed w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setShowCreateResume(true)}
          >
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 rounded-full text-white bg-gradient-to-br from-indigo-300 to-indigo-500" />
            <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
              Create Resume
            </p>
          </button>
          <button
            className="border border-dashed w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setShowEditResume(true)}
          >
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

      {showCreateResume && (
        <form
          onSubmit={createResume}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex bg-opacity-50 items-center justify-center z-50"
          // onClick={() => setShowCreateResume(false)}
        >
          <div className="min-w-lg flex flex-col relative bg-white items-center justify-center rounded-2xl gap-5 px-6 py-10">
            <h1 className="text-2xl font-bold mb-4">Create a Resume</h1>
            <input
              type="text"
              className="p-2 w-full px-4 mb-4 focus:outline-green-600 border border-gray-300 bg-white ring-green-600 rounded-md"
              placeholder="Resume Title"
            />
            <button
              type="submit"
              className="py-2 bg-green-600 w-full text-white cursor-pointer px-4 rounded hover:bg-green-700 transition-colors"
            >
              Create Resume
            </button>
            <XIcon
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
              onClick={() => {
                setShowCreateResume(false);
                setTitle("");
              }}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Dashboard;
