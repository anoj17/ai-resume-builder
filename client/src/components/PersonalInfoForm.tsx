import {
  BriefcaseBusiness,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

interface PersonalInfoFormProps {
  data: any;
  removeBackground: boolean;
  setRemoveBackground: any;
  onchange: any;
}

const PersonalInfoForm = ({
  data,
  removeBackground,
  setRemoveBackground,
  onchange,
}: PersonalInfoFormProps) => {
  const handleChangeImage = (field: string, value: File) => {
    onchange({ ...data, [field]: value });
  };

  const fields = [
    {
      key: "full_name",
      label: "Full Name",
      type: "text",
      icon: User,
      required: true,
    },
    {
      key: "email",
      label: "Email Address",
      type: "email",
      icon: Mail,
      required: true,
    },
    {
      key: "phone",
      label: "Phone Number",
      type: "tel",
      icon: Phone,
      required: true,
    },
    { key: "location", label: "Location", type: "text", icon: MapPin },
    {
      key: "Profession",
      label: "Profession",
      type: "text",
      icon: BriefcaseBusiness,
    },
    { key: "website", label: "Website", type: "url", icon: Globe },
    { key: "linkedin", label: "LinkedIn", type: "url", icon: Linkedin },
  ];

  const handleChange = (name: string, value: any) => {};

  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-900">Personal Info</h1>
      <p className="text-sm text-gray-600">
        Get Started with the personal information
      </p>
      <div className="flex items-center gap-2">
        <label>
          {data?.image ? (
            <img
              src={
                typeof data?.image === "string"
                  ? data?.image
                  : URL.createObjectURL(data.image)
              }
              className="h-16 w-16 object-cover mt-5 rounded-full hover:opacity-80 ring ring-slate-300"
            />
          ) : (
            <div className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer">
              <User className="size-10 p-2.5 rounded-full border cursor-pointer" />
              Upload Image
            </div>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file) {
                handleChangeImage("image", file);
              }
            }}
          />
        </label>
        {typeof data?.image === "object" && (
          <div className="flex flex-col gap-1 pl-4 text-sm">
            <p>Remove Background</p>
            <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setRemoveBackground((prev: any) => !prev)}
                checked={removeBackground}
              />
              <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:bg-green-600 transition-colors duration-200"></div>
              <span className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4"></span>
            </label>
          </div>
        )}
      </div>
      {fields.map((field, index) => {
        const Icon = field.icon;
        return (
          <div key={index} className="space-y-1 mt-5">
            <label className="text-sm font-medium text-gray-600 gap-2 items-center flex flex-col">
              <div className="flex w-full">
                <Icon className="size-4 mr-2" />
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </div>
              <input
                type={field.type}
                value={data?.[field.key] || ""}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-500 focus:border-green-500 outline-none transition-colors text-sm"
                placeholder={`Enter your ${field.label.toLowerCase()}}`}
                required={field.required}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(field.key, e.target.value)
                }
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalInfoForm;
