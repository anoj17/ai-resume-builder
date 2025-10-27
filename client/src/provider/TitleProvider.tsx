import { useState, type ReactNode } from "react";
import { TitleContext } from "../context/TitleContext";

export const TitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>("");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
