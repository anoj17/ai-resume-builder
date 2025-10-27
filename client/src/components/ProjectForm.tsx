import { Briefcase, Plus, Sparkle, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const ProjectForm = ({ data, onChange }: any) => {
  const addProject = () => {
    const newProject = {
      name: "",
      technology_used: "",
      previewUrl: "",
      githubUrl: "",
      description: "",
      id: uuidv4(),
    };
    onChange([...data, newProject]);
  };

  const removeProject = (index: number) => {
    const updated = data.filter((_: any, i: number) => i !== index);
    onChange(updated);
  };

  const updateProject = (
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
            Project{" "}
          </h3>
          <p className="text-sm text-gray-500"> Add your project here </p>
        </div>
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-1 cursor-pointer text-sm bg-green-100 text-green-700 rounded hover:bg-green-200/80 transition-colors disabled:opacity-50"
        >
          <Plus className="size-4" /> Add Project
        </button>
      </div>
      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Briefcase className="w-10 h-10 mx-auto text-gray-300 mb-3" />
          <p>No project added yet.</p>
          <p className="text-sm">Click "Add Project" to get started.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {data?.map((project: any, index: number) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-center">
                <h4>Project #{index + 1}</h4>
                <button
                  onClick={() => removeProject(index)}
                  className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={project.name || ""}
                  onChange={(e) => updateProject(index, "name", e.target.value)}
                  className="px-3 py-2 text-sm rounded-lg border border-gray-200 outline-none focus:outline-green-500 focus:ring focus:ring-green-500"
                  placeholder="Project Name"
                />

                <input
                  type="text"
                  value={project.technology_used || ""}
                  onChange={(e) =>
                    updateProject(index, "technology_used", e.target.value)
                  }
                  className="px-3 py-2 text-sm rounded-lg outline-none focus:outline-green-500 border border-gray-200 focus:ring focus:ring-green-500"
                  placeholder="Used Technologies"
                />
                <input
                  type="text"
                  value={project.previewUrl || ""}
                  onChange={(e) =>
                    updateProject(index, "previewUrl", e.target.value)
                  }
                  className="px-3 py-2 text-sm rounded-lg outline-none focus:outline-green-500 border border-gray-200 focus:ring focus:ring-green-500"
                  placeholder="Preview URL"
                />
                <input
                  type="text"
                  value={project.githubUrl || ""}
                  onChange={(e) =>
                    updateProject(index, "githubUrl", e.target.value)
                  }
                  className="px-3 py-2 text-sm rounded-lg outline-none focus:outline-green-500 border border-gray-200 focus:ring focus:ring-green-500"
                  placeholder="Github URL"
                />
              </div>
              <div className="space-y-2 mt-2 w-full">
                <div className="flex items-center justify-between w-full">
                  <label className="text-sm font-medium text-gray-700">
                    Project Description
                  </label>
                  <button className="flex items-center gap-1 cursor-pointer px-2 py-1 text-xs bg-purple-100 rounded hover:bg-purple-200 text-purple-700 transition-colors disabled:opacity-50">
                    <Sparkle className="size-4" /> Enhance with AI
                  </button>
                </div>
                <textarea
                  rows={4}
                  value={project.description || ""}
                  onChange={(e) =>
                    updateProject(index, "description", e.target.value)
                  }
                  className="w-full text-sm px-3 py-2 rounded-lg resize-none outline-none border border-gray-200 focus:outline-green-500 focus:ring focus:ring-green-500"
                  placeholder="Describe your project"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectForm;
