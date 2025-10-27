import { Loader2, Plus, Sparkles, X } from "lucide-react";
import React from "react";

const Skillsform = ({
  data,
  onChange,
  handleSubmit,
  isPending,
  resumeId,
}: any) => {
  const [newSkill, setNewSkill] = React.useState("");

  const addSkills = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    onChange(data.filter((skill: string, i: number) => i !== index));
  };

  const keyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkills();
    }
  };

  const submitForm = () => {
    // e.preventDefault();
    handleSubmit();
  };
  return (
    <div className="space-y-4">
      <div>
        <h3 className="flex text-lg text-gray-900 font-semibold items-center gap-2">
          Skills
        </h3>
        <p className="text-sm text-gray-500">
          Add your technical and soft skills
        </p>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter a skill"
          className="flex-1 px-3 py-2 text-sm border border-gray-200 focus:outline-green-500 focus:ring focus:ring-green-500 rounded-lg"
          onChange={(e) => setNewSkill(e.target.value)}
          value={newSkill}
          onKeyDown={keyPress}
        />
        <button
          onClick={addSkills}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-green-600 cursor-pointer text-white rounded-lg hover:bg-blue700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!newSkill.trim()}
        >
          <Plus className="size-4" /> Add
        </button>
      </div>
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((skill: string, index: number) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="ml-1 cursor-pointer hover:bg-green-200 rounded-full p-0.5 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">
          <Sparkles className="w-10 h-10 mx-auto mb-2 text-gray-300" />
          <p>No skills added yet</p>
          <p className="text-sm">Add your technical and soft skills above.</p>
        </div>
      )}
      <div className="bg-green-50 p-3 rounded-lg">
        <p className="text-sm text-green-800">
          <strong>Tip:</strong>
          Add your relevant skills. Include both technical skills (programming
          languages, tools) and soft skills (leadership, communication).
        </p>
      </div>
      <div className="flex items-end justify-end w-full">
        <button
          onClick={submitForm}
          className="py-1 cursor-pointer mt-3 px-3 min-w-[100px] bg-green-600 hover:bg-green-600/80 text-white rounded-lg"
        >
          {isPending ? (
            <Loader2 className="size-5 mx-auto animate-spin text-white" />
          ) : (
            <div>{resumeId ? "Update" : "Save"} Resume</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Skillsform;
