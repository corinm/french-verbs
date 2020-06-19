import data from "../data";
import { Verb } from "../types";

const useVerbsByLanguage = (language: string): Verb[] => {
  return data[language] || [];
};

export default useVerbsByLanguage;
