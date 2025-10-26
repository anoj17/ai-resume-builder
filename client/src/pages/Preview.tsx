import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import ResumePreview from "../components/ResumePreview";
import Loader from "../components/Loader";
import { ArrowLeftIcon } from "lucide-react";

const Preview = () => {
  const [resumeData, setResumeData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { resumeId } = useParams();

  const loadResume = async () => {
    setResumeData(
      dummyResumeData.filter((item: any) => item.id === resumeId || null)
    );
    setLoading(false);
  };
  useEffect(() => {
    loadResume();
  }, []);
  return resumeData ? (
    <div className="bg-slate-100">
      <div className="max-w-3xl mx-auto py-10">
        <ResumePreview
          data={resumeData[0]}
          template={resumeData[0]?.template}
          accentColor={resumeData[0]?.accent_color}
          className="py-4 bg-white"
        />
      </div>
    </div>
  ) : (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-center text-6xl text-slate-400 font-medium">
            Resume not found!
          </p>
          <Link
            to={"/"}
            className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors"
          >
            <ArrowLeftIcon className="mr-2 size-4" /> go to home page
          </Link>
        </div>
      )}
    </div>
  );
};

export default Preview;
