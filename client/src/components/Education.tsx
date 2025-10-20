import { Briefcase, Plus, Sparkle, Trash2 } from "lucide-react";

const Education = ({ data, onChange }: any) => {
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (index: number) => {
    const updated = data.filter((_: any, i: number) => i !== index);
    onChange(updated);
  };

  const updatedEducation = (
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
            Education{" "}
          </h3>
          <p className="text-sm text-gray-500"> Add your education here </p>
        </div>
        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-3 py-1 cursor-pointer text-sm bg-green-100 text-green-700 rounded hover:bg-green-200/80 transition-colors disabled:opacity-50"
        >
          <Plus className="size-4" /> Add Education
        </button>
      </div>
      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Briefcase className="w-10 h-10 mx-auto text-gray-300 mb-3" />
          <p>No education added yet.</p>
          <p className="text-sm">Click "Add Education" to get started.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {data?.map((education: any, index: number) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-center">
                <h4>Education #{index + 1}</h4>
                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={education.institution || ""}
                  onChange={(e) =>
                    updatedEducation(index, "institution", e.target.value)
                  }
                  className="px-3 py-2 text-sm rounded-lg border border-gray-200 outline-none focus:outline-green-500 focus:ring focus:ring-green-500"
                  placeholder="Institution Name"
                />

                <input
                  type="text"
                  value={education.degree || ""}
                  onChange={(e) =>
                    updatedEducation(index, "degree", e.target.value)
                  }
                  className="px-3 py-2 text-sm rounded-lg outline-none focus:outline-green-500 border border-gray-200 focus:ring focus:ring-green-500"
                  placeholder="Degree"
                />
                <input
                  type="text"
                  value={education.field || ""}
                  onChange={(e) =>
                    updatedEducation(index, "field", e.target.value)
                  }
                  placeholder="Field"
                  className="px-3 py-2 border border-gray-200 text-sm rounded-lg"
                />
                <input
                  type="month"
                  value={education.graduation_date || ""}
                  onChange={(e) =>
                    updatedEducation(index, "graduation_date", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-200 text-sm rounded-lg"
                />
                <input
                  type="number"
                  value={education.gpa || ""}
                  onChange={(e) =>
                    updatedEducation(index, "gpa", e.target.value)
                  }
                  placeholder="GPA"
                  className="px-3 py-2 text-sm rounded-lg outline-none focus:outline-green-500 border border-gray-200 focus:ring focus:ring-green-500"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Education;
