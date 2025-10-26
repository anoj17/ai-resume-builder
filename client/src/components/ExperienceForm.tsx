import { Briefcase, Plus, Sparkle, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const ExperienceForm = ({ data, onChange }: any) => {
  const addExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      description: "",
      is_current: false,
      id: uuidv4(),
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (index: number) => {
    const updated = data.filter((_: any, i: number) => i !== index);
    onChange(updated);
  };

  const updatedExperience = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            {" "}
            Professional Experience{" "}
          </h3>
          <p className="text-sm text-gray-500">
            {" "}
            Add your job experience here{" "}
          </p>
        </div>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 px-3 py-1 cursor-pointer text-sm bg-green-100 text-green-700 rounded hover:bg-green-200/80 transition-colors disabled:opacity-50"
        >
          <Plus className="size-4" /> Add Experience
        </button>
      </div>
      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Briefcase className="w-10 h-10 mx-auto text-gray-300 mb-3" />
          <p>No work experience added yet.</p>
          <p className="text-sm">Click "Add Experience" to get started.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {data?.map((experience: any, index: number) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-center">
                <h4>Experience #{index + 1}</h4>
                <button
                  onClick={() => removeExperience(index)}
                  className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={experience.company || ""}
                  onChange={(e) =>
                    updatedExperience(index, "company", e.target.value)
                  }
                  className="px-3 py-2 text-sm rounded-lg border border-gray-200 outline-none focus:outline-green-500 focus:ring focus:ring-green-500"
                  placeholder="Company Name"
                />

                <input
                  type="text"
                  value={experience.position || ""}
                  onChange={(e) =>
                    updatedExperience(index, "position", e.target.value)
                  }
                  className="px-3 py-2 text-sm rounded-lg outline-none focus:outline-green-500 border border-gray-200 focus:ring focus:ring-green-500"
                  placeholder="Position"
                />
                <input
                  type="month"
                  value={experience.start_date || ""}
                  onChange={(e) =>
                    updatedExperience(index, "start_date", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-200 text-sm rounded-lg"
                />
                <input
                  type="month"
                  value={experience.end_date || ""}
                  onChange={(e) =>
                    updatedExperience(index, "end_date", e.target.value)
                  }
                  disabled={experience.is_current}
                  className="px-3 py-2 border border-gray-200 text-sm rounded-lg disabled:bg-gray-100"
                />
              </div>
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="rounded cursor-pointer text-blue-300 focus:ring-blue-600"
                  onChange={(e) => {
                    updatedExperience(
                      index,
                      "is_current",
                      e.target.checked ? true : false
                    );
                  }}
                />
                <span className="text-sm text-gray-700">
                  Currently working here
                </span>
              </label>
              <div className="space-y-2 mt-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Job Description
                  </label>
                  <button className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 rounded hover:bg-purple-200 text-purple-700 transition-colors disabled:opacity-50">
                    <Sparkle className="size-4" /> Enhance with AI
                  </button>
                </div>
                <textarea
                  rows={4}
                  value={experience.description || ""}
                  onChange={(e) =>
                    updatedExperience(index, "description", e.target.value)
                  }
                  className="w-full text-sm px-3 py-2 rounded-lg resize-none outline-none border border-gray-200 focus:outline-green-500 focus:ring focus:ring-green-500"
                  placeholder="Describe your key responsibilities and achievements..."
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;
