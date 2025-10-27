import { createContext } from "react";

interface TitleContextType {
  title: string;
  setTitle: (value: string) => void;
}

export const TitleContext = createContext<TitleContextType>({
  title: "",
  setTitle: () => {},
});
