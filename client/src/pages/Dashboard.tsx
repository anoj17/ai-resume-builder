import { PlusIcon, UploadCloudIcon } from "lucide-react";

const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
