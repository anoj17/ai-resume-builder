import { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  Briefcase,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  Download,
  EyeIcon,
  EyeOffIcon,
  FileText,
  FolderIcon,
  GraduationCap,
  Share2Icon,
  Sparkles,
  User,
} from "lucide-react";
import PersonalInfoForm from "../components/PersonalInfoForm";
import ResumePreview from "../components/ResumePreview";
import TempleateSelector from "../components/TempleateSelector";
import ColorPicker from "../components/ColorPicker";
import ProfessionalSummayForm from "../components/ProfessionalSummayForm";
import ExperienceForm from "../components/ExperienceForm";
import Education from "../components/Education";
import ProjectForm from "../components/ProjectForm";
import Skillsform from "../components/Skillsform";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState<any>({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    work_experience: [],
    education: [],
    skills: [],
    projects: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: "false",
  });
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const { resumeId } = useParams();

  const loadExistingResume = async () => {
    const resume = dummyResumeData.filter((item: any) => item._id === resumeId);
    if (resume) {
      setResumeData(resume[0]);
    }
  };

  const handleChangePublicOrPrivate = async () => {
    setResumeData((prev: any) => ({ ...prev, public: !prev.public }));
  };

  const handleShareResume = async () => {
    const frontendUrl = window.location.href.split("/app/")[0];
    const resumeUrl = frontendUrl + "/view/" + resumeId;

    if (navigator.share) {
      navigator.share({ url: resumeUrl, text: "My Resume" });
    } else {
      alert("Share not supported on this browser.");
    }
  };

  const downloadResume = async () => {
    window.print();
  };

  const saveResume = async () => {
    console.log("saving resume");
  };

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Summary", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Projects", icon: Sparkles },
    { id: "skills", name: "Skills", icon: FolderIcon },
  ];

  const activeSection = sections[activeSectionIndex];

  useEffect(() => {
    loadExistingResume();
  }, []);
  return (
    <div>
      <div className="max-w-7xl px-4 py-6 mx-auto">
        <Link
          to="/app"
          className="gap-2 text-slate-500 hover:text-slate-700 transition-all items-center inline-flex"
        >
          <ArrowLeftIcon className="size-4" /> Back to Dashboard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* left content - Form */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
              {/* progressbar */}
              <hr
                className={`border-2 border-gray-200 absolute top-0 right-0 left-0`}
              />
              <hr
                className="bg-gradient-to-r from-green-500 to-green-600 border-none absolute top-0 left-0 h-1 rounded-full"
                style={{
                  width: `${
                    (activeSectionIndex * 100) / (sections.length - 1)
                  }%`,
                  transition: "width 1s ease-in-out", // 👈 smooth transition
                }}
              />

              {/* Navigation Section */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                <div className="flex items-center gap-2">
                  <TempleateSelector
                    selectedTemplate={resumeData?.template}
                    onChange={(template: string) =>
                      setResumeData((prev: any) => ({ ...prev, template }))
                    }
                  />
                  <ColorPicker
                    selectedColor={resumeData?.accent_color}
                    onChange={(color: string) =>
                      setResumeData((prev: any) => ({
                        ...prev,
                        accent_color: color,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center">
                  {activeSectionIndex !== 0 && (
                    <button
                      onClick={() =>
                        setActiveSectionIndex((prev) => Math.max(prev - 1, 0))
                      }
                      className="flex items-center gap-1 p-3 rounded-lg text-sm cursor-pointer font-medium text-gray-600 hover:bg-gray-50 transition-all"
                      disabled={activeSectionIndex === 0}
                    >
                      <ChevronLeft className="size-6 stroke-1" /> Previous
                    </button>
                  )}
                  <button
                    onClick={() =>
                      setActiveSectionIndex((prev) =>
                        Math.min(prev + 1, sections.length - 1)
                      )
                    }
                    className={`flex items-center gap-1 p-3 cursor-pointer rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${
                      activeSectionIndex === sections.length - 1 && "opacity-50"
                    }`}
                    disabled={activeSectionIndex === sections.length - 1}
                  >
                    <ChevronRight className="size-6 stroke-1" /> Next
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="space-y-6">
                {activeSection.id === "personal" && (
                  <PersonalInfoForm
                    data={resumeData?.personal_info}
                    onchange={(data: string) =>
                      setResumeData((prev: any) => ({
                        ...prev,
                        personal_info: data,
                      }))
                    }
                    removeBackground={removeBackground}
                    setRemoveBackground={setRemoveBackground}
                  />
                )}
                {activeSection.id === "summary" && (
                  <ProfessionalSummayForm
                    data={resumeData?.professional_summary}
                    onChange={(data: string) =>
                      setResumeData((prev: any) => ({
                        ...prev,
                        professional_summary: data,
                      }))
                    }
                    setResumeData={setResumeData}
                  />
                )}
                {activeSection.id === "experience" && (
                  <ExperienceForm
                    data={resumeData?.experience || []}
                    onChange={(data: string) =>
                      setResumeData((prev: any) => ({
                        ...prev,
                        experience: data,
                      }))
                    }
                  />
                )}

                {activeSection.id === "education" && (
                  <Education
                    data={resumeData?.education || []}
                    onChange={(data: string) =>
                      setResumeData((prev: any) => ({
                        ...prev,
                        education: data,
                      }))
                    }
                  />
                )}
                {activeSection.id === "projects" && (
                  <ProjectForm
                    data={resumeData?.projects || []}
                    onChange={(data: string) =>
                      setResumeData((prev: any) => ({
                        ...prev,
                        projects: data,
                      }))
                    }
                  />
                )}
                {activeSection.id === "skills" && (
                  <Skillsform
                    data={resumeData?.skills || []}
                    onChange={(data: string) =>
                      setResumeData((prev: any) => ({
                        ...prev,
                        skills: data,
                      }))
                    }
                  />
                )}
              </div>
            </div>
          </div>

          {/* right content - Preview */}
          <div className="lg:col-span-7 max-lg:mt-6">
            {/* buttons */}

            <div className="w-full relative">
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2">
                {resumeData?.public && (
                  <button
                    onClick={handleShareResume}
                    className="flex items-center p-2 px-4 cursor-pointer gap-2 text-xs bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-lg ring-blue-300 hover:ring transition-colors"
                  >
                    <Share2Icon className="size-4" />
                  </button>
                )}
                <button
                  onClick={handleChangePublicOrPrivate}
                  className="flex items-center p-2 px-4 gap-2 cursor-pointer text-xs bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg text-purple-600 ring-purple-300 hover:ring transition-colors"
                >
                  {resumeData.public ? (
                    <EyeIcon className="size-4" />
                  ) : (
                    <EyeOffIcon className="size-4" />
                  )}
                  {resumeData.public ? "Public" : "Private"}
                </button>
                <button
                  onClick={downloadResume}
                  className="flex items-center p-2 px-4 gap-2 text-xs cursor-pointer bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors"
                >
                  <Download className="size-4" /> download
                </button>
              </div>
            </div>

            {/* resume preview */}
            <ResumePreview
              data={resumeData}
              template={resumeData?.template}
              accentColor={resumeData?.accent_color}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
