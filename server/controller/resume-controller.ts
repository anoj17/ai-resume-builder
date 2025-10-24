import prisma from "../db/db";

export const GetAllResumes = async (req: any, res: any) => {
  const { userId } = req.user;

  try {
    const resumes = await prisma.resume.findMany({
      where: {
        userId,
      },
    });
    return res.status(200).json({ resumes, success: true });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching resumes" });
  }
};

export const addResume = async (req: any, res: any) => {
  const { userId } = req.user;
  const {
    title,
    template,
    public,
    education,
    experience,
    accent_color,
    professional_summary,
    professional_info,
    skills,
  } = req.body;

  if (
    !title ||
    !template ||
    !public ||
    !education ||
    !experience ||
    !accent_color ||
    !professional_summary ||
    !professional_info ||
    !skills
  ) {
    return res
      .status(400)
      .json({ message: "Please provide all the required fields" });
  }

  try {
    const resume = await prisma.resume.create({
      data: {
        userId,
        title,
        public,
        education,
        experience,
        template,
        accent_color,
        professional_summary,
        professional_info,
        skills,
      },
    });
    return res
      .status(201)
      .json({ message: "Resume created successfully", success: true });
  } catch (error) {
    return res.status(500).json({ message: "Error creating resume" });
  }
};

export const updateResume = async (req: any, res: any) => {
  const { userId } = req.user;
  const { resumeId } = req.params;
  const {
    title,
    template,
    public,
    education,
    experience,
    accent_color,
    professional_summary,
    professional_info,
    skills,
  } = req.body;

  if (!resumeId) {
    return res.status(400).json({ message: "Resume ID is required" });
  }

  if (
    !title ||
    !template ||
    !public ||
    !education ||
    !experience ||
    !accent_color ||
    !professional_summary ||
    !professional_info ||
    !skills
  ) {
    return res
      .status(400)
      .json({ message: "Please provide all the required fields" });
  }

  try {
    const resume = await prisma.resume.update({
      where: {
        id: resumeId,
        userId,
      },
      data: {
        title,
        public,
        education,
        experience,
        template,
        accent_color,
        professional_summary,
        professional_info,
        skills,
      },
    });
    return res
      .status(200)
      .json({ message: "Resume updated successfully", success: true });
  } catch (error) {
    return res.status(500).json({ message: "Error updating resume" });
  }
};

export const deleteResume = async (req: any, res: any) => {
  const { userId } = req.user;
  const { resumeId } = req.params;

  if (!resumeId) {
    return res.status(400).json({ message: "Resume ID is required" });
  }

  try {
    const resume = await prisma.resume.delete({
      where: {
        id: resumeId,
        userId,
      },
    });
    return res
      .status(200)
      .json({ message: "Resume Delete Successfully", success: true });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting resume" });
  }
};
