import { useState } from "react";

import data from "../data";
import { Verb } from "../types";

interface Return {
  language: string;
  setLanguage: Function;
  verbs: Verb[];
}

const useVerbsByLanguage = (): Return => {
  const [language, setLanguage] = useState("french");
  return { language, setLanguage, verbs: data[language] };
};

export default useVerbsByLanguage;
